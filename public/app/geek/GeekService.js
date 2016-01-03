(function() {
    angular
    .module('GeekService', [])
    .factory('Geek', ['$http', GeekService]);

    function GeekService($http) {

    }
})();
