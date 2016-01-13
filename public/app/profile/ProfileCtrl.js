(function() {
    'use strict';

    angular
        .module('MainModule')
        .controller('ProfileController', ['$scope', '$timeout', 'MainCtrlService', 'MainApiService', ProfileController]);
    // .controller('ProfileController', ['$rootScope', 'CvService', ProfileController]);

    // function ProfileController($rootScope, CvService) {
    function ProfileController($scope, $timeout, MainCtrlService, MainApiService) {
        var vm = this;
        vm.CtrlData = MainCtrlService.data;
        vm.asdf3 = 'Tää o asdf kolomone3';

        vm.saveUser = function() {
            MainCtrlService.saveUser();
        };

        vm.logUser = function() {
            console.log(vm.CtrlData.user);
            console.log(MainCtrlService.data.userID);
        };

        vm.editMode = function() {
            MainCtrlService.editMode();
        };

        vm.addInfoSet = function(index) {
            console.log(index);
            var info = {
                endYear: 2014,
                startYear: 2009,
                title: "Entry title",
                infoSnips: [{
                    txt: "Sample Text"
                }],
            };
            // console.log(
            MainCtrlService.data.user.infoModules[index].infosets.push(info);
            // );
        };

        // same as initSampleModules!
        vm.addModule = function() {
            MainApiService.addDummyDataInModule().then(function(response) {
                MainCtrlService.data.user = response.user.userinfo;
            }, function(err) {
                console.log(err);
            });
        };

        vm.moduleDelete = function(index) {
            if (index < 0 || index >= vm.CtrlData.user.infoModules.length) {
                console.log('moduletDelete error!!index');
                return;
            }
            vm.CtrlData.user.infoModules.splice(index, 1);

        };

        vm.infosetDelete = function(index, module) {
            // vm.infosetDelete = function(index, moduleIndex) {
            if (index < 0 || index >= module.infosets.length) {
                console.log('infosetDelete error!!index');
                return;
            }
            module.infosets.splice(index, 1);
            // vm.CtrlData.user.infoModules[moduleIndex].infosets[]
        };

        vm.shiftInfo = function(index, swapIndex, module) {

            var array;
            if (!module) {
                array = vm.CtrlData.user.infoModules;
            } else {
                array = module.infosets;
            }
            console.log(array);

            if (index < 0 || index >= array.length || swapIndex < 0 || swapIndex >= array.length) {
                console.log('Shift error!!index');
                return;
            }
            var tempSwap = array[swapIndex];
            array[swapIndex] = array[index];
            array[index] = tempSwap;
            console.log(array);
            $timeout(function() {
                $scope.$apply();
            });
        };
        return vm;
    }
})();
