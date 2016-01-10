(function() {
    'use strict';

    angular
        .module('MainModule')
        .controller('ProfileController', ['$scope', '$timeout', 'MainCtrlService', 'MainApiService', ProfileController]);
    // .controller('ProfileController', ['$rootScope', 'CvService', ProfileController]);

    // function ProfileController($rootScope, CvService) {
    function ProfileController($scope, $timeout, MainCtrlService, MainApiService) {
        var vm = this;
        vm.CtrlData = MainCtrlService.data;
        vm.asdf3 = 'Tää o asdf kolomone3';
        // vm.edit = MainCtrlService.data;

        vm.initSampleModules = function() {
            MainApiService.addDummyDataInModule().then(function(response) {
                console.log('dummydata');
                console.log(response);
                MainCtrlService.data.user = response.user.userinfo;
            }, function(err) {
                console.log(err);
            });
        };

        vm.saveUser = function() {
            console.log('todo: saveuser!');
        };

        vm.logUser = function() {
            console.log(vm.CtrlData.user);
        };

        vm.editMode = function() {
            var edits = document.getElementsByClassName("contenteditable");
            
            var bool = vm.CtrlData.edit = !vm.CtrlData.edit;

            console.log(bool);
            for (var i = 0; i < edits.length; i++) {
                console.log('Log edits: ' + edits[i]);
                edits[i].setAttribute("contenteditable", bool.toString());
            }
            // console.log(vm.CtrlData.user);
            // console.log('Log edits: ' + edits[0]);
            // edits[0].
        };


        // $timeout(function() {
        //     vm.update();
        // }, 200);

        vm.asdfData = {};
        vm.modules = [];
        vm.modul1 = {
            'title': 'This is a Title!!'
        };

        // vm.modules.push({'title':'this is a title'});
        // vm.modules.push({'title':'fasdfs'});

        // CvService.getModules().then(function(response) {
        //     vm.modules = response;
        // });

        vm.addModule = function($compile) {
            CvService.addModule().then(function(response) {
                console.log(response);
                console.log(response.title);
                vm.modules.push(response);

                // vm.modul1 = response;
                // var node = document.createElement('cv-info-module');
                // node.setAttribute("module", "modul1");
                // var element = document.getElementById('testi');
                // element.appendChild(node);
            });
            // vm.add();
        };

        vm.removeModule = function(module) {
            console.log('attempting: removeModule on following: ' + module);
            var index = vm.modules.indexOf(module);
            console.log('index: ' + index);
            index = (index >= 0) ? index : 0;
            console.log('index: ' + index);
            console.log('vm.modules: ' + vm.modules);
            // vm.modules.splice(index, 1);

            CvService.removeModule(module).then(function(response) {
                vm.modules.splice(vm.modules.indexOf(module), 1);
                console.log('vm.modules: ' + vm.modules);
            });
        };

        vm.addInfoSet = function() {
            CvService.addInfoSet().then(function(response) {
                console.log('asdfTestii!!');
                console.log(response);
            });
        };

        // vm.editMode = function() {
        //     var edits = document.getElementsByClassName("edit");
        //     var bool = (!vm.CtrlData.edit);
        //     console.log(bool);
        //     for (var i = 0; i < edits.length; i++) {
        //         console.log('Log edits: ' + edits[i]);
        //         edits[i].setAttribute("contenteditable", bool.toString());
        //     }
        //     console.log(vm.CtrlData.user);
        //     // console.log('Log edits: ' + edits[0]);
        //     // edits[0].
        // };

        // vm.add = function () {
        //  var el = $compile( '<cv-info-module text="modul1"></cv-info-module>' )( vm );
        //  $element.parent().append( el );
        // };



        // vm.addTodo = function() {
        //    TodoService.addTodo(vm.formData).then(function(response) {
        //      vm.todos.push(vm.formData);
        //      vm.formData = {};
        //    });
        //  };

        //  vm.removeTodo = function(todo) {
        //    TodoService.removeTodo(todo).then(function(response) {
        //      vm.todos.splice(vm.todos.indexOf(todo), 1);
        //    });
        //  };
        return vm;
    }

    // webresApp
    //     .directive('cvInfoModule', function() {
    //         return {
    //             restrict: 'E',
    //             scope: {
    //                 module: '=module',
    //                 extRemove: '&removeModule'
    //                     // title: '@module.title'
    //             },
    //             templateUrl: 'templates/infoModule2.html',
    //             link: function(scope, element, attrs) {

    //                 scope.remove = function(module) {
    //                     removeModule(module);
    //                 };
    //             },
    //         };
    //     })
    //     .directive('cvInfoSet', function() {
    //         return {
    //             restrict: 'E',
    //             scope: {
    //                 infomodule: '=infoset',
    //             },
    //             templateUrl: 'templates/infoSet.html',
    //         };
    //     });
})();
