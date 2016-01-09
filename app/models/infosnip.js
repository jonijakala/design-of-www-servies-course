var mongoose     = require('mongoose');

/*
infoSnipSchema type = {'paragraph', 'list', 'pair'}
paragraph -> content = String
list -> [Array]
pairs -> [ [pair1_a, pair1_b], [pair2_a, pair2_b] ]
 */
var infoSnipSchema = mongoose.Schema({
    type: String,
    // content: Schema.Types.Mixed
    content: mongoose.Schema.Types.Mixed
});

module.exports = mongoose.model('InfoModule', infoModuleSchema);

