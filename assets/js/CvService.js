webresApp.service('CvService', function($http, $q) {
	return {
		'getModules': function() {
			var defer = $q.defer();
			$http.get('/modules/getModules').success(function(resp) {
				defer.resolve(resp);
			}).error(function(err) {
				defer.reject(err);
			});
			return defer.promise;
		},
		'addModule': function() {
			var defer = $q.defer();
			$http.post('/modules/addModule').success(function(resp) {
				defer.resolve(resp);
			}).error(function(err) {
				defer.reject(err);
			});
			return defer.promise;
		},
		'removeModule': function(module) {
			var defer = $q.defer();
			$http.post('/modules/removeModule', module).success(function(resp) {
				defer.resolve(resp);
			}).error(function(err) {
				defer.reject(err);
			});
			return defer.promise;
		},
		'addInfoSet': function() {
			var defer = $q.defer();
			$http.post('/modules/addInfoSet').success(function(resp) {
 				defer.resolve(resp);
			}).error(function(err) {
				defer.reject(err);
			});
			return defer.promise;
		}
	};
});

// todoApp.service('TodoService', function($http, $q) {
//   return {
//     'getTodos': function() {
//       var defer = $q.defer();
//       $http.get('/todo/getTodos').success(function(resp){
//         defer.resolve(resp);
//       }).error( function(err) {
//         defer.reject(err);
//       });
//       return defer.promise;
//     },
//     'addTodo': function(todo) {
//       var defer = $q.defer();
//       $http.post('/todo/addTodo', todo).success(function(resp){
//         defer.resolve(resp);
//       }).error( function(err) {
//         defer.reject(err);
//       });
//       return defer.promise;
//     },
//     'removeTodo': function(todo) {
//       var defer = $q.defer();
//       $http.post('/todo/removeTodo', todo).success(function(resp){
//         defer.resolve(resp);
//       }).error( function(err) {
//         defer.reject(err);
//       });
//       return defer.promise;
//     }
// }});