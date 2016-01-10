(function() {
    'use strict';

    angular
        .module('MainModule')
        .directive('InfoModule', InfoModule)
        .directive('InfoSet', InfoSet);

    function InfoModule() {
        return {
            restrict: 'E',
            scope: {
                module: '=module',
                extRemove: '&removeModule'
                    // title: '@module.title'
            },
            templateUrl: 'templates/infoModule2.html',
            link: function(scope, element, attrs) {

                scope.remove = function(module) {
                    removeModule(module);
                };
            },
        };
    }

    function InfoSet() {
        return {
            restrict: 'E',
            scope: {
                infomodule: '=infoset',
            },
            templateUrl: 'templates/infoSet.html',
        };
    }


})();



//     .directive('cvInfoModule', function() {
//         
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
