(function() {
    'use strict';
    
    angular
        .module('MainCtrl', [])
        .controller('MainController', MainController);

    function MainController() {
        var vm = this;
        vm.active = 'profile';
        // this.tagline = 'To the moon and back!';
        vm.activate = function(page) {
            vm.active = page;
        };
    }
})();
