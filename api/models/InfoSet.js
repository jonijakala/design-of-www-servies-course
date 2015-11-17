/**
* InfoSet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	title: {
  		type: 'string',
  		defaultsTo: 'Edit this title',
  	},

  	// value: { type: 'string' },
  	// module: { model: 'InfoModule' },
  	
  	startDate: { type: 'string' },

  	endDate: { type: 'string' },

  	text: {
  		type: 'string',
  		defaultsTo: 'Edit text here!',
  	},

  }
};

