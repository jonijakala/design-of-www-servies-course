(function() {
	'use strict';
	
    angular.module('appRoutes', [])
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

            $routeProvider

            // home page
                .when('/', {
                templateUrl: 'app/main/home.html',
                controller: 'MainController'
            })

            .when('/nerds', {
                templateUrl: 'app/nerd/nerd.html',
                controller: 'NerdController'
            })

            .when('/geeks', {
                templateUrl: 'app/geek/geek.html',
                controller: 'GeekController'
            });

            $locationProvider.html5Mode(true);

        }]);
})();



// (function() {
//     'use strict';

//     angular.module('app.routing', [
//             'ui.router'
//         ])
//         .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
//             $urlRouterProvider
//                 .otherwise(function($injector) {
//                     $injector.get('$state').go('404', {}, {
//                         location: false
//                     });
//                 });

//             $stateProvider
//                 .state('home', {
//                     url: '',
//                     templateUrl: 'app/home/home.html',
//                     controller: 'HomeController',
//                     controllerAs: 'vm'
//                 })
//                 .state('material', {
//                     url: '/material',
//                     templateUrl: 'app/material/material.html',
//                     controller: 'MaterialController',
//                     controllerAs: 'vm'
//                 })
//                 .state('404', {
//                     templateUrl: 'app/404/tmpl404.html'
//                 });
//         }]);
// })();