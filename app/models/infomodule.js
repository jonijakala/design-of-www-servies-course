var mongoose     = require('mongoose');

var infoModuleSchema   = mongoose.Schema({
    title: String,
    infosets: [infoSetSchema]
});

var infoSetSchema = mongoose.Schema({
    title: String,
    startYear: Number,
    endYear: Number,
    startMonth: { type: Number, min: 0, max: 13 },
    endMonth: { type: Number, min: 0, max: 13 },
    infoSnips: [infoSnipSchema]
});

var infoSnipSchema = mongoose.Schema({
    type: String,
    // content: Schema.Types.Mixed
    content: mongoose.Schema.Types.Mixed
});

/*
infoSnipSchema type = {'paragraph', 'list', 'pair'}
paragraph -> content = String
list -> [Array]
pairs -> [ [pair1_a, pair1_b], [pair2_a, pair2_b] ]
 */

module.exports = mongoose.model('InfoModule', infoModuleSchema);
module.exports = mongoose.model('InfoSet', infoSetSchema);
