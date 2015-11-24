/**
 * ModuleController
 *
 * @description :: Server-side logic for managing Modules
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getModules: function(req, res) {
		ModuleService.getModules(function(modules) {
			res.json(modules);
		});
	},
	addModule: function(req, res) {
		ModuleService.addModule(function(success) {
			res.json(success);
		});
	},
	removeModule: function(req, res) {
		var modulValue = (req.body.value) ? req.body.value : undefined;
		ModuleService.removeModule(modulValue, function(success) {
			res.json(success);
		});
	},

	// getTodos: function(req, res) {
 //        TodoService.getTodos(function(todos) {
 //            res.json(todos);
 //        });
 //    },
 //    addTodo: function(req, res) {
 //        var todoVal = (req.body.value) ? req.body.value : undefined;
 //        TodoService.addTodo(todoVal, function(success) {
 //            res.json(success);
 //        });
 //    },
 //    removeTodo: function(req, res) {
 //       var todoVal = (req.body.value) ? req.body.value : undefined;
 //        TodoService.removeTodo(todoVal, function(success) {
 //            res.json(success);
 //        });
 //    }
};

