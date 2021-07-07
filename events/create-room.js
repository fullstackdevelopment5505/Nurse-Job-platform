const Message = require('../models/Message');
const Room = require('../models/Room');
const xss = require('xss');

module.exports = (socket, data) => {
    console.log('Received create room event', JSON.stringify(data));

    let { counterpart } = data;

    const findMessagesAndEmit = room => {
        Message.find({room: room._id}).sort({_id: -1}).limit(20).populate({
            path: 'author',
            select: '-email -password -friends -__v',
            populate: {
                path: 'picture',
            },
        }).then(messages => {
            Message.find({room: room._id, type: 'image'}).sort({_id: -1}).limit(14).populate({
                path: 'author',
                select: '-email -password -friends -__v',
                populate: [{
                    path: 'picture',
                }],
            }).then(images => {
                messages.reverse();
                socket.emit('create-room', {status: 200,
                    room: {
                        _id: room._id,
                        people: room.people,
                        title: xss(room.title),
                        isGroup: room.isGroup,
                        lastUpdate: room.lastUpdate,
                        lastAuthor: room.lastAuthor,
                        lastMessage: room.lastMessage,
                        messages,
                        images,
                    }
                });
            });
        });
    };

    Room.findOne({
            people: { $all : [socket.decoded_token.id, counterpart]},
            isGroup: false,
        })
        .populate({
            path: 'people',
            select: '-email -password -friends -__v',
            populate: [{
                path: 'picture',
            }],
        })
        .exec((err, room) => {
            if (err) return socket.emit('create-room', { status: 500 });
            if (room) {
                findMessagesAndEmit(room)
            }
            else {
                Room({people: [socket.decoded_token.id, counterpart], isGroup: false}).save().then(room => {
                    Room.findOne({_id: room._id}).populate('people').then(room => {
                        findMessagesAndEmit(room)
                    });
                });
            }
        });
};
