const store = require('../store');
const uuid = require('uuid/v4');

const generateRoomId = () => {
    let id = uuid();
    return store.rtcRooms[id] ? generateRoomId() : id;
};

const removePeer = (array, element) => {
    let result = [...array];
    let i = 0;
    let found = false;
    while (i < result.length && !found) {
        if (element._id === array[i]._id) {
            result.splice(i, 1);
            found = true;
        }
        i++;
    }
    return result;
};

module.exports = (socket, data) => {
    const { event, user, users, sender, roomId, isGroup, group, video, peerVideo } = data;
    switch (event) {
        case 'room':
            const id = isGroup ? group._id : generateRoomId();
            let ringUsers = [...users];
            if (isGroup) ringUsers = removePeer(ringUsers, sender);
            let room = {
                id, peers: [sender], exit: [], ring: ringUsers, isGroup, group,
            };
            store.rtcRooms[id] = room;
            ringUsers.forEach(user => {
                store.socketsByUserID[user._id] && store.socketsByUserID[user._id].forEach(socket => {
                    store.io.to(socket.id).emit('rtc', { event: 'ring', sender, users, room, video });
                });
            });
            socket.emit('rtc', { event: 'ringing', sender, users, room });
            break;
        case 'add-peer':
            console.log('add-peer', users);
            let addUsers = [...users];
            addUsers.forEach(user => {
                store.rtcRooms[roomId].ring.forEach(peer => {
                    store.socketsByUserID[peer._id] && store.socketsByUserID[peer._id].forEach(socket => {
                        store.io.to(socket.id).emit('rtc', { event: 'peer-added', user });
                    });
                });
                store.rtcRooms[roomId].ring.push(user);
                store.socketsByUserID[user._id] && store.socketsByUserID[user._id].forEach(socket => {
                    store.io.to(socket.id).emit('rtc', { event: 'ring', sender, users, room: store.rtcRooms[roomId], video, added: true, peerVideo });
                });
            });
            break;
        case 'enter':
            store.rtcRooms[roomId].peers.forEach(user => {
                store.socketsByUserID[user._id] && store.socketsByUserID[user._id].forEach(socket => {
                    store.io.to(socket.id).emit('rtc', { event: 'peer-video', sender, video });
                });
            });
            store.rtcRooms[roomId].ring.forEach(user => {
                store.socketsByUserID[user._id] && store.socketsByUserID[user._id].forEach(socket => {
                    store.io.to(socket.id).emit('rtc', { event: 'peer-video', sender, video });
                });
            });
            store.rtcRooms[roomId].peers.forEach(user => {
                store.socketsByUserID[user._id] && store.socketsByUserID[user._id].forEach(socket => {
                    store.io.to(socket.id).emit('rtc', {event: 'enter', sender, video});
                });
            });
            store.rtcRooms[roomId].peers.push(sender);
            store.rtcRooms[roomId].ring = removePeer(store.rtcRooms[roomId].ring, sender);
            // All users receiving 'enter' will create peerconnection and send offer to the new peer
            break;
        case 'exit':
            store.rtcRooms[roomId].exit.push(sender);
            store.rtcRooms[roomId].peers = removePeer(store.rtcRooms[roomId].peers, sender);
            store.rtcRooms[roomId].ring = removePeer(store.rtcRooms[roomId].ring, sender);
            store.rtcRooms[roomId].peers.forEach(user => {
                store.socketsByUserID[user._id] && store.socketsByUserID[user._id].forEach(socket => {
                    store.io.to(socket.id).emit('rtc', {event: 'exit', sender});
                });
            });
            store.rtcRooms[roomId].ring.forEach(user => {
                store.socketsByUserID[user._id] && store.socketsByUserID[user._id].forEach(socket => {
                    store.io.to(socket.id).emit('rtc', {event: 'exit', sender});
                });
            });
            // All users receiving 'exit' will destroy peerconnection linked to the peer
            break;
        default:
        case 'offer':
        case 'answer':
        case 'ice-candidate':
            store.socketsByUserID[user._id] && store.socketsByUserID[user._id].forEach(socket => {
                store.io.to(socket.id).emit('rtc', data);
            });
            break;
    }
};
