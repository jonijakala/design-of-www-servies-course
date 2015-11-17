webresApp.controller('CvCtrl', ['$scope', '$rootScope', 'CvService', function($scope, $rootScope, CvService) {
	$scope.asdfData = {};
	$scope.modules = [];

	CvService.getModules().then(function(response) {
		$scope.modules = response;
	});

	$scope.addModule = function() {
		CvService.addModule().then(function(response) {
			$scope.modules.push(response);
		});
	};

	$scope.removeModule = function(module) {
		CvService.removeModule(module).then(function(response) {
			$scope.modules.splice($scope.modules.indexOf(module), 1);
		});
	};

	$scope.addInfoSet = function() {
		CvService.addInfoSet().then(function(response) {
			console.log('asdfTestii!!');
			console.log('response');
		}); 
	};

	// $scope.addTodo = function() {
 //    TodoService.addTodo($scope.formData).then(function(response) {
 //      $scope.todos.push($scope.formData);
 //      $scope.formData = {};
 //    });
 //  };

 //  $scope.removeTodo = function(todo) {
 //    TodoService.removeTodo(todo).then(function(response) {
 //      $scope.todos.splice($scope.todos.indexOf(todo), 1);
 //    });
 //  };
}]);