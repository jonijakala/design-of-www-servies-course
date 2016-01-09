var mongoose = require('mongoose');

var infoSetSchema = mongoose.Schema({
    title: String,
    startYear: Number,
    endYear: Number,
    startMonth: { type: Number, min: 0, max: 13 },
    endMonth: { type: Number, min: 0, max: 13 },
    infoSnips: [infoSnipSchema]
});

module.exports = mongoose.model('InfoSet', infoSetSchema);