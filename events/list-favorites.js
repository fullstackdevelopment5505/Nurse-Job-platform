const User = require('../models/User');

module.exports = (socket, data) => {
    console.log('Received list favorites event', JSON.stringify(data));

    User.findOne({_id: socket.decoded_token.id})
        .populate({
            path : 'favorites',
            populate : [
                {
                    path: 'people',
                    select: '-email -password -friends -__v',
                    populate: {
                        path: 'picture',
                    },
                },
                {
                    path : 'lastMessage',
                },
                {
                    path : 'picture',
                },
            ],
        })
        .exec((err, user) => {
            if (err) return socket.emit('list-favorites', { status: 500 });
            if (user) socket.emit('list-favorites', { status: 200, favorites: user.favorites });
        });
};
