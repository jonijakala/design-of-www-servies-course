(function() {
    'use strict';

    angular.module('sampleApp', [
        'ngRoute',
        'appRoutes',
        'MainCtrl',
        'NerdCtrl',
        'NerdService',
        'GeekCtrl',
        'GeekService'
    ]);

})();


// angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'GeekService']);