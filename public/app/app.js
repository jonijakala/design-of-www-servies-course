(function() {
    'use strict';

    angular.module('webresApp', [
        // 'ngRoute',
        'ui.router',
        'appRoutes',
        'ProfileCtrl',
        'PortfolioCtrl',
        'MainCtrl',
        'ContactCtrl'
        // 'NerdCtrl',
        // 'NerdService',
    ]);
})();

// angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'GeekService']);