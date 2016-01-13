(function() {
    'use strict';

    angular
        .module('MainModule')
        .controller('MainController', ['MainApiService', 'MainCtrlService', '$timeout', MainController]);

    function MainController(MainApiService, MainCtrlService, $timeout) {

        var vm = this;
        vm.CtrlData = MainCtrlService.data;
        vm.active = 'profile';
        vm.editOn = false;
        vm.activate = function(page) {
            MainCtrlService.editMode(false);
            vm.active = page;
        };

        vm.editMode = function() {
            MainCtrlService.editMode();
        };

        vm.cancelEdits = function() {
            MainCtrlService.cancelEdits();
        };

        vm.getData = function() {
            MainApiService.getUserData().then(function(response) {
                console.log(response.userinfo);
                $timeout(function() {
                    MainCtrlService.data.user = response.userinfo;
                    console.log('id: ' + response._id);
                    MainCtrlService.data.userID = response._id;

                });
            });
        };

        vm.initiateDummyModuls = function() {
            MainApiService.addDummyDataInfModule().then(function(response) {
                MainCtrlService.data.user = response.user.userinfo;
            }, function(err) {
                if (err)
                    console.log(err);
            });
        };

        vm.getData();
    }
})();
