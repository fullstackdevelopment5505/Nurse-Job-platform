const User = require('../models/User');

module.exports = (socket, data) => {
    console.log('Received list favorites event', JSON.stringify(data));

    let { roomID } = data;

    User.findOne({_id: socket.decoded_token.id})
        .then(user => {
            let update;
            if (user.favorites.includes(roomID)) update = {$pull: {favorites: roomID}};
            else update = {$push: {favorites: roomID}};
            User.findOneAndUpdate({_id: socket.decoded_token.id}, update, {new: true})
                .populate({
                    path : 'favorites',
                    populate : [
                        {
                            path : 'people',
                            select: '-email -tagLine -password -friends -__v',
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
                .then(user => {
                    socket.emit('toggle-favorite', { status: 200, favorites: user.favorites, roomID });
                })
                .catch(err => {
                    console.log(err);
                    socket.emit('toggle-favorite', { status: 500 });
                });
        })
        .catch(err => {
            console.log(err);
            socket.emit('toggle-favorite', { status: 500 });
        });
};
