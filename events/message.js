const Message = require('../models/Message');
const Room = require('../models/Room');
const store = require('../store');
const xss = require('xss');

module.exports = (socket, data) => {
    console.log(`Received message event: ${JSON.stringify(data)}`);

    const { roomID, authorID, content, type, fileID } = data;

    Message({
        room: roomID,
        author: authorID,
        content: xss(content),
        type,
        file: fileID,
    }).save()
        .then(message => {
            Message.findById(message._id).populate({
                path: 'author',
                select: '-email -password -friends -__v',
                populate: {
                    path: 'picture',
                },
            }).then(message => {
                Room.findByIdAndUpdate(roomID, { $set: { lastUpdate: message.date, lastMessage: message._id, lastAuthor: authorID } })
                    .then(room => {
                        socket.emit('message-out', {status: 200, message, room});
                        room.people.forEach(person => {
                            const myUserID = socket.decoded_token.id;
                            const personUserID = person.toString();

                            if (personUserID !== myUserID && store.socketsByUserID[personUserID]) {
                                store.socketsByUserID[person].forEach(socket => {
                                    store.io.to(socket.id).emit('message-in', {status: 200, message, room});
                                });
                            }
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        socket.emit('message-out', {status: 500, message});
                    });
            })
                .catch(err => {
                    console.log(err);
                    socket.emit('message-out', {status: 500, message});
                });
        })
        .catch(err => {
            console.log(err);
            socket.emit('message-out', {status: 500});
        });
};
