const Message = require('../models/Message');
const Room = require('../models/Room');
const xss = require('xss');

module.exports = (socket, data) => {
    console.log('Received create group event', JSON.stringify(data));

    let { people, title, picture } = data;

    Room({people: people, isGroup: true, title: xss(title), picture}).save().then(room => {
        Room.findOne({_id: room._id}).populate('people').then(room => {
            socket.emit('create-group', { status: 200, room, user: socket.decoded_token.id });
        });
    });
};
