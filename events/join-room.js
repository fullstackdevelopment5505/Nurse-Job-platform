const Message = require('../models/Message');
const Room = require('../models/Room');

module.exports = (socket, data) => {
    console.log('Received join room event', JSON.stringify(data));

    let { roomID } = data;

    const findMessagesAndEmit = room => {
        Message.find({room: room._id}).sort({_id: -1}).limit(20).populate({
            path: 'author',
            select: '-email -password -friends -__v',
            populate: {
                path: 'picture',
            },
        }).then(messages => {
            messages.reverse();
            Message.find({room: room._id, type: 'image'}).sort({_id: -1}).limit(14).populate({
                path: 'author',
                select: '-email -password -friends -__v',
                populate: {
                    path: 'picture',
                },
            }).then(images => {
                socket.emit('join-room', {status: 200,
                    room: {
                        _id: room._id,
                        people: room.people,
                        title: room.title,
                        isGroup: room.isGroup,
                        lastUpdate: room.lastUpdate,
                        lastAuthor: room.lastAuthor,
                        lastMessage: room.lastMessage,
                        picture: room.picture,
                        messages,
                        images,
                    }
                });
            });
        });
    };

    Room.findOne({_id: roomID})
        .populate('picture')
        .populate({
            path: 'people',
            select: '-email -tagLine -password -friends -__v',
            populate: [{
                path: 'picture',
            }],
        })
        .exec((err, room) => {
            if (err) return socket.emit('join-room', { status: 500 });
            findMessagesAndEmit(room)
        });
};
