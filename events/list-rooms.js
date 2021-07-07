const Room = require('../models/Room');

module.exports = (socket, data) => {
    console.log('Received list rooms event', JSON.stringify(data));

    let { limit } = data;

    !limit && (limit = 30);

    Room.find({
            people: { $in: [socket.decoded_token.id] },
            $or: [{
                lastMessage: { $ne: null }
            }, {
                isGroup: true,
            }],
        })
        .sort({lastUpdate: -1})
        .populate('picture')
        .populate({
            path: 'people',
            select: '-email -password -friends -__v',
            populate: {
                path: 'picture',
            },
        })
        .populate('lastMessage')
        .limit(limit)
        .exec((err, rooms) => {
            if (err) return socket.emit('list-rooms', { status: 500 });
            socket.emit('list-rooms', { limit, status: 200, rooms });
        });
};
