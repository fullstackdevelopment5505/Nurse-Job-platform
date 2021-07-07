var mongoose = require('mongoose');
var RoomSchema = new mongoose.Schema({
    mainClient: {type: mongoose.Schema.ObjectId, ref: 'Client'},
    mainNurse: {type: mongoose.Schema.ObjectId, ref: 'Nurse'},
    peopleClient: [{type: mongoose.Schema.ObjectId, ref: 'Client'}],
    peopleNurse: [{type: mongoose.Schema.ObjectId, ref: 'Nurse'}],
    isGroup: {type: Boolean, default: false},
    lastUpdate: Date,
    lastClient: {type: mongoose.Schema.ObjectId, ref: 'Client'},
    lastNurse: {type: mongoose.Schema.ObjectId, ref: 'Nurse'},
    lastMessage: {type: mongoose.Schema.ObjectId, ref: 'messages'},
});

module.exports =  mongoose.model('rooms', RoomSchema);
