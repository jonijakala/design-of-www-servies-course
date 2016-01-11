(function() {
    'use strict';

    angular
        .module('MainModule')
        .controller('MainController', ['MainApiService', 'MainCtrlService', '$timeout', MainController]);

    function MainController(MainApiService, MainCtrlService, $timeout) {
        //     .controller('MainController', ['MainApiService', MainController]);

        // function MainController(MainApiService) {
        var vm = this;
        vm.CtrlData = MainCtrlService.data;
        // vm.edit = MainCtrlService.data;
        // vm.userData = MainCtrlService.;
        vm.active = 'profile';
        // this.tagline = 'To the moon and back!';
        vm.activate = function(page) {
            // MainCtrlService.data.edit = false;
            MainCtrlService.editMode(false);
            vm.active = page;
        };

        vm.getData = function() {
            MainApiService.getUserData().then(function(response) {
                console.log(response.userinfo);
                $timeout(function() {
                    // MainCtrlService.updateUserData(response.userinfo);
                    MainCtrlService.data.user = response.userinfo;
                    console.log('id: ' + response._id);
                    MainCtrlService.data.userID = response._id;

                });
                // vm.$apply();
            });
        };

        vm.initiateDummyModuls = function() {
            MainApiService.addDummyDataInfModule().then(function(response) {}, function(err) {
                if (err)
                    console.log(err);
            });
        };


        //init
        vm.getData();
    }
})();
