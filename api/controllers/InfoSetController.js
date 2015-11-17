/**
 * InfoSetController
 *
 * @description :: Server-side logic for managing Infosets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addInfoSet: function(req, res) {
		ModuleService.addInfoSet(function(infoset) {
			res.json(infoset);
		});
		// InfoSet.create().exec(function(err, infoset) {
		// 	console.log('Infoset: ' + infoset.title);
		// });
	},
	// updateInfoSetTitle: function(req, res) {
	// 	var infoset = (req.body.title) ? req.body.title : undefined;
	// 	ModuleService.updateInfoSetTitle(infoset, function(infoset) {
	// 		res.json(infoset);
	// 	});
	// }
};

