(function() {
    'use strict';

    angular
        .module('MainModule')
        .directive('contenteditable', ContentEditable);

    function ContentEditable() {
        return {
            restrict: "C",
            require: "ngModel",
            link: function(scope, element, attrs, ngModel) {

                function read() {
                    ngModel.$setViewValue(element.text());
                }

                ngModel.$render = function() {
                    element.html(ngModel.$viewValue || "");
                };

                element.on("blur keyup change", function() {
                    scope.$apply(read());
                });
            }
        };
    }

    // function InfoModule() {
    //     return {
    //         restrict: 'E',
    //         scope: {
    //             module: '=module',
    //             extRemove: '&removeModule'
    //                 // title: '@module.title'
    //         },
    //         templateUrl: 'templates/infoModule2.html',
    //         link: function(scope, element, attrs) {

    //             scope.remove = function(module) {
    //                 removeModule(module);
    //             };
    //         },
    //     };
    // }

    // function InfoSet() {
    //     return {
    //         restrict: 'E',
    //         scope: {
    //             infomodule: '=infoset',
    //         },
    //         templateUrl: 'templates/infoSet.html',
    //     };
    // }


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
