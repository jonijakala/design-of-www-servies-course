(function() {
    'use strict';

    angular
        .module('appRoutes', [])
        .config(['$urlRouterProvider', '$stateProvider', AppRoutes]);

    function AppRoutes($urlRouterProvider, $stateProvider) {

        // $locationProvider.html5Mode(true);
        $urlRouterProvider
            .otherwise(function($injector) {
                $injector.get('$state').go('404', {}, {
                    location: false
                });
            });

        $stateProvider
            .state('main', {
                url: '?public',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('main.profile', {
                url: '/profile',
                templateUrl: 'app/profile/infoModule.html',
                controller: 'ProfileController',
                controllerAs: 'vm'
            })
            .state('main.portfolio', {
                url: '/portfolio',
                templateUrl: 'app/portfolio/portfolio.html',
                controller: 'PortfolioController',
                controllerAs: 'vm'
            })
            .state('main.contact', {
                url: '/contact',
                templateUrl: 'app/contact/contact.html',
                controller: 'ContactController',
                controllerAs: 'vm'
            })
            .state('404', {
                templateUrl: 'app/404/tmpl404.html'
            });
    }
})();
