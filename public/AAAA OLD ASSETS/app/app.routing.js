(function() {
    'use strict';

    angular.module('app.routing', [
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise(function($injector) {
                $injector.get('$state').go('404', {}, {location: false});
            });

        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('material', {
                url: '/material',
                templateUrl: 'app/material/material.html',
                controller: 'MaterialController',
                controllerAs: 'vm'
            })
            .state('404', {
                templateUrl: 'app/404/tmpl404.html'
            })
        ;
    }]);
})();
