var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
    id:{type:Number},
    Responsiveness: { type: Number },
    Professionalism: { type: Number },
    Value: { type: Number },
    Flexibility: { type: Number },
    Behaviour: { type: Number },
    reviewSubject: { type: String },
    reviewWrite: { type: String },
    reviewOverallRating: { type: String },
    from:{ type: mongoose.Schema.Types.ObjectId, ref: 'Nurse', required: true },
    to:{ type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    reviewDate: { type: Date }

}, { toJSON: { getters: true } });

module.exports = mongoose.model('Review', ReviewSchema);