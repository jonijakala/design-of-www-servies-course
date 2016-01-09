var mongoose     = require('mongoose');

var infoModuleSchema   = mongoose.Schema({
    title: String,
    infosets: [mongoose.model('InfoSet').schema]
});

module.exports = mongoose.model('InfoModule', infoModuleSchema);

