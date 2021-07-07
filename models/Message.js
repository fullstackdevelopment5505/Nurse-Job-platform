const mongoose = require('./mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    // author: {type: Schema.ObjectId, ref: 'users'},
    authorClient: {type: Schema.ObjectId, ref: 'Client'},
    authorNurse: {type: Schema.ObjectId, ref: 'Nurse'},
    content: String,
    type: String,
    file: {type: Schema.ObjectId, ref: 'files'},
    room: {type: Schema.ObjectId, ref: 'rooms'},
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('messages', MessageSchema);
