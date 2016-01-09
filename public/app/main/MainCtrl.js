(function() {
    'use strict';
    
    angular
        .module('MainModule')
        .controller('MainController', ['MainService', MainController]);

    function MainController(MainService) {
    //     .controller('MainController', ['MainService', MainController]);

    // function MainController(MainService) {
        var vm = this;
        vm.userData = null;
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

        vm.initiateDummyModuls = function() {
            MainService.addDummyDataInfModule().then(function(response) {
                vm.userData = response.user;
            }, function(err) {
                if (err)
                    console.log(err);
            });
        };
    }
})();
