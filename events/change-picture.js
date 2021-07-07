const User = require('../models/User');

module.exports = (socket, data) => {
    console.log('Received change picture event', JSON.stringify(data));

    let { imageID } = data;

    User.findOneAndUpdate({_id: socket.decoded_token.id}, {$set: {picture: imageID}}, {new: true})
        .populate('picture')
        .exec((err, user) => {
            if (err) return socket.emit('change-picture', { status: 500 });
            socket.emit('change-picture', { status: 200, picture: user.picture });
        });
};
