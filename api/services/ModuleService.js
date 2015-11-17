module.exports = {
  getModules: function(next) {
    Module.find().exec(function(err, modules) {
      if(err) throw err;
      next(modules);
    });
  },
  addModule: function(next) {
    Module.create({value: 'new module!'}).exec(function(err, module) {
      if(err) throw err;
      next(module);      
    });
  },
  removeModule: function(modulValue, next) {
    Module.destroy({value: 'new module!'}).exec(function(err, module) {
      if(err) throw err;
      next(module);      
    });
  },
  addInfoSet: function(next) {
    InfoSet.create().exec(function(err, infoset) {
      if (err) throw err;
      next(infoset);
    });
  },
  // updateInfoSetTitle: function(infoset, next) {
  //   InfoSet.find()
  // }

  // getTodos: function(next) {
  //   Todo.find().exec(function(err, todos) {
  //     if(err) throw err;
  //     next(todos);
  //   });
  // },
  // addTodo: function(todoVal, next) {
  //   Todo.create({value: todoVal}).exec(function(err, todo) {
  //     if(err) throw err;
  //     next(todo);
  //   });
  // },
  // removeTodo: function(todoVal, next) {
  //   Todo.destroy({value: todoVal}).exec(function(err, todo) {
  //     if(err) throw err;
  //     next(todo);
  //   });
  // }
};