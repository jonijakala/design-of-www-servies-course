(function() {
    'use strict';
    
    angular
        .module('MainModule')
        .controller('PortfolioController', ['MainCtrlService', PortfolioController]);

    function PortfolioController(MainCtrlService) {
        var vm = this;
        console.log(MainCtrlService.userData);
        vm.userData = MainCtrlService.userData;
        vm.asdf = "superASdfasdfasdfasdf";
    }
})();
