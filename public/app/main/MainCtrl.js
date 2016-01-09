(function() {
    'use strict';
    
    angular
        .module('MainModule')
        .controller('MainController', ['MainApiService', 'MainCtrlService', MainController]);

    function MainController(MainApiService, MainCtrlService) {
    //     .controller('MainController', ['MainApiService', MainController]);

    // function MainController(MainApiService) {
        var vm = this;
        vm.userData = null;
        vm.active = 'profile';
        // this.tagline = 'To the moon and back!';
        vm.activate = function(page) {
            vm.active = page;
        };

        vm.getData = function() {
            MainApiService.getUserData().then(function(response) {
                console.log('asdf. Service funkkar! responssi:');
                console.log('response.user');
                console.log(response.user);
                console.log('response.userinfo');
                console.log(response.userinfo);
                MainCtrlService.userData = response.userinfo;
            });
        };

        vm.initiateDummyModuls = function() {
            MainApiService.addDummyDataInfModule().then(function(response) {
            }, function(err) {
                if (err)
                    console.log(err);
            });
        };
    }
})();
