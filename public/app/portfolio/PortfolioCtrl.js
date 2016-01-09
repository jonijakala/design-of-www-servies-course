(function() {
    'use strict';
    
    angular
        .module('PortfolioCtrl', [])
        .controller('PortfolioController', ['MainCtrl', PortfolioController]);

    function PortfolioController(MainCtrl) {
        var vm = this;
        vm.asdf = "superASdfasdfasdfasdf";
        // var main = MainCtrl;
        // this.tagline = 'To the moon and back!';
    }
})();
