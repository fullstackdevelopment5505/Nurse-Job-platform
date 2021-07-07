module.exports = [
    {
        tag: 'message',
        callback: require('./message'),
    },
    {
        tag: 'search',
        callback: require('./search'),
    },
    {
        tag: 'list-rooms',
        callback: require('./list-rooms'),
    },
    {
        tag: 'create-room',
        callback: require('./create-room'),
    },
    {
        tag: 'join-room',
        callback: require('./join-room'),
    },
    {
        tag: 'list-favorites',
        callback: require('./list-favorites'),
    },
    {
        tag: 'toggle-favorite',
        callback: require('./toggle-favorite'),
    },
    {
        tag: 'change-picture',
        callback: require('./change-picture'),
    },
    {
        tag: 'more-messages',
        callback: require('./more-messages'),
    },
    {
        tag: 'more-images',
        callback: require('./more-images'),
    },
    {
        tag: 'more-rooms',
        callback: require('./more-rooms'),
    },
    {
        tag: 'video-status',
        callback: require('./video-status'),
    },
    {
        tag: 'rtc',
        callback: require('./rtc'),
    },
    {
        tag: 'close',
        callback: require('./close'),
    },
    {
        tag: 'away',
        callback: require('./away'),
    },
    {
        tag: 'busy',
        callback: require('./busy'),
    },
    {
        tag: 'online',
        callback: require('./online'),
    },
    {
        tag: 'available',
        callback: require('./available'),
    },
    {
        tag: 'list-status',
        callback: require('./list-status'),
    },
    {
        tag: 'create-group',
        callback: require('./create-group'),
    },
];
