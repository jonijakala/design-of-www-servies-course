(function() {
    angular
        .module('NerdCtrl', [])
        .controller('NerdController', NerdController);

    function NerdController() {
        var vm = this;
        vm.tagline = 'Nothing beats a pocket protector!';
    }
})();
