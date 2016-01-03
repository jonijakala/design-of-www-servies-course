(function() {
    'use strict';

    angular
        .module('GeekCtrl', [])
        .controller('GeekController', GeekController);

    function GeekController() {
            var vm = this;
            vm.tagline = 'The square root of life is pi!';
        }
})();
