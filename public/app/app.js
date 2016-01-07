(function() {
    'use strict';

    angular.module('webresApp', [
        // 'ngRoute',
        'ui.router',
        'appRoutes',
        'ProfileCtrl',
        'MainCtrl',
        'ContactCtrl'
        // 'NerdCtrl',
        // 'NerdService',
        // 'GeekCtrl',
        // 'GeekService'
    ]);

})();


// angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'GeekService']);