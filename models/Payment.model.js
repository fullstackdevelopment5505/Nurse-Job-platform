
var mongoose = require('mongoose');
var JobSchema = new mongoose.Schema({
    id:{type:Number},
    status:{type:String,default:'Pending'},
    category:{ type: mongoose.Schema.Types.ObjectId, ref: 'NurseCategory'},
    client:{ type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
    nurse:{ type: mongoose.Schema.Types.ObjectId, ref: 'Nurse'},
    startDate:{type:Date},
    modifyDate:{type:Date},
    amount:{type:Number},
    currency:{type:String,default:'usd'},
    customer:{type:String},
}, { toJSON: { getters: true } });

module.exports = mongoose.model('Payment', JobSchema);