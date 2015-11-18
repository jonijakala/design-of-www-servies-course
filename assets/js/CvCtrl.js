webresApp.controller('CvCtrl', ['$scope', '$rootScope', 'CvService', function($scope, $rootScope, CvService) {
	$scope.asdfData = {};
	$scope.modules = [];
	$scope.modul1 = {'title':'This is a Title!!'};

	// $scope.modules.push({'title':'this is a title'});
	// $scope.modules.push({'title':'fasdfs'});

	CvService.getModules().then(function(response) {
		$scope.modules = response;
	});

	$scope.addModule = function($compile) {
		CvService.addModule().then(function(response) {
			console.log(response);
			console.log(response.title);
			$scope.modules.push(response);

			// $scope.modul1 = response;
			// var node = document.createElement('cv-info-module');
			// node.setAttribute("module", "modul1");
			// var element = document.getElementById('testi');
			// element.appendChild(node);
		});
		// $scope.add();
	};

	$scope.removeModule = function(module) {
		console.log('attempting: removeModule on following: ' + module);
		var index = $scope.modules.indexOf(module);
		console.log('index: ' + index);
		index = (index >= 0) ? index : 0;
		$scope.modules.splice(index, 1);
		
		CvService.removeModule(module).then(function(response) {
			$scope.modules.splice($scope.modules.indexOf(module), 1);
		});
	};

	$scope.addInfoSet = function() {
		CvService.addInfoSet().then(function(response) {
			console.log('asdfTestii!!');
			console.log(response);
		});
	};

	$scope.editMode = function() {
		var edits = document.getElementsByClassName("edit");
		var bool = (!edits[0].getAttribute("contenteditable"));
		console.log(bool);
		for (var i=0; i<edits.length; i++) {
			console.log('Log edits: ' + edits[i]);
			edits[i].setAttribute("contenteditable", bool.toString());
		}
		// console.log('Log edits: ' + edits[0]);
		// edits[0].
	};

	// $scope.add = function () {
	// 	var el = $compile( '<cv-info-module text="modul1"></cv-info-module>' )( $scope );
	// 	$element.parent().append( el );
	// };



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
}])
.directive('cvInfoModule', function() {
	return {
    	restrict: 'E',
    	scope: {
     		module: '=module',
			removeModule: '&'
     		// title: '@module.title'
    	},
    	templateUrl: 'templates/infoModule2.html',
    	};
})
.directive('cvInfoSet', function() {
	return {
		restrict: 'E',
		scope: {
			infomodule: '=infoset',
		},
		templateUrl: 'templates/infoSet.html',
	};
});