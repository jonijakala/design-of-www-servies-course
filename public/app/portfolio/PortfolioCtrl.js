(function() {
    'use strict';
    
    angular
        .module('MainModule')
        .controller('PortfolioController', ['MainCtrlService', PortfolioController]);

    function PortfolioController(MainCtrlService) {
        var vm = this;
        console.log(MainCtrlService.asdf);
        vm.userData = MainCtrlService.asdf;
        vm.asdf = "superASdfasdfasdfasdf";
        // var main = MainCtrl;
        // this.tagline = 'To the moon and back!';
    }
})();
