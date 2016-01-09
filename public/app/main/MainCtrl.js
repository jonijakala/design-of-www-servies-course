(function() {
    'use strict';
    
    angular
        .module('MainCtrl', [])
        .controller('MainController', ['MainService', MainController]);

    function MainController(MainService) {
    //     .controller('MainController', ['MainService', MainController]);

    // function MainController(MainService) {
        var vm = this;
        vm.active = 'profile';
        // this.tagline = 'To the moon and back!';
        vm.activate = function(page) {
            vm.active = page;
        };

        vm.getData = function() {
            MainService.getUserData().then(function(response) {
                console.log('asdf. Service funkkar! responssi:');
                console.log(response);
            });
        };
    }
})();
