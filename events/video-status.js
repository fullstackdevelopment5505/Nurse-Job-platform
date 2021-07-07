const Message = require('../models/Message');
const Room = require('../models/Room');
const store = require('../store');

module.exports = (socket, data) => {
    console.log(`Received video status event: ${JSON.stringify(data)}`);

    const { userID, video } = data;

    const myUserID = socket.decoded_token.id;

    if (userID !== myUserID && store.socketsByUserID[userID]) {
        store.socketsByUserID[userID].forEach(socket => {
            store.io.to(socket.id).emit('video-status', {status: 200, video, userID: myUserID});
        });
    }
};
