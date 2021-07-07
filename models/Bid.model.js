
var mongoose = require('mongoose');
var BidSchema = new mongoose.Schema({
    id:{type:Number},
    nurse:{ type: mongoose.Schema.Types.ObjectId, ref: 'Nurse'},
    job:{ type: mongoose.Schema.Types.ObjectId, ref: 'Job'},
    content:{type:String},
    bidBudget:{type:Number},
    startDate:{type:Date},
    modifyDate:{type:Date},
}, { toJSON: { getters: true } });

module.exports = mongoose.model('Bid', BidSchema);