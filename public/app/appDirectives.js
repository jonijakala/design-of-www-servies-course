(function() {
    'use strict';

    angular
        .module('MainModule')
        .directive('contenteditable', ContentEditable);

    function ContentEditable() {
        return {
            restrict: "CA",
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

})();
