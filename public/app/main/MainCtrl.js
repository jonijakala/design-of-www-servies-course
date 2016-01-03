(function() {
    'use strict';
    angular
        .module('MainCtrl', [])
        .controller('MainController', MainController);

    function MainController() {
        var vm = this;
        this.tagline = 'To the moon and back!';
    }
})();
