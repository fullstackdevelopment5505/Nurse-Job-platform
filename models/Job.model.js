
var mongoose = require('mongoose');
var JobSchema = new mongoose.Schema({
    id:{type:Number},
    status:{type:String,default:'Pending'},
    category:{ type: mongoose.Schema.Types.ObjectId, ref: 'NurseCategory'},
    client:{ type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
    nurse:{ type: mongoose.Schema.Types.ObjectId, ref: 'Nurse'},
    startDate:{type:Date},
    modifyDate:{type:Date},
    minBudget:{type:Number},
    maxBudget:{type:Number},
    location:{type:String},
    rate:{type:Number},
    summary:{type:String},
    period:{type:Number},
    title:{type:String},
    count:{type:Number,default:0}
}, { toJSON: { getters: true } });

module.exports = mongoose.model('Job', JobSchema);