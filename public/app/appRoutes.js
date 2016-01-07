(function() {
    'use strict';

    angular
        .module('appRoutes', [])
        .config(['$urlRouterProvider', '$stateProvider', AppRoutes]);

    function AppRoutes($urlRouterProvider, $stateProvider) {

        // $routeProvider

        // // home page
        //     .when('/', {
        //         templateUrl: 'app/main/profile.html',
        //         controller: 'ProfileController',
        //         controllerAs: 'vm'
        //     })
        //     .when('/nerds', {
        //         templateUrl: 'app/nerd/nerd.html',
        //         controller: 'NerdController',
        //         controllerAs: 'vm'
        //     })
        //     .when('/geeks', {
        //         templateUrl: 'app/geek/geek.html',
        //         controller: 'GeekController',
        //         controllerAs: 'vm'
        //     });

        // $locationProvider.html5Mode(true);
        $urlRouterProvider
            .otherwise(function($injector) {
                $injector.get('$state').go('404', {}, {
                    location: false
                });
            });

        $stateProvider
            .state('main', {
                url: '',
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
            .state('main.contact', {
                url: '/contact',
                templateUrl: 'app/contact/contact.html',
                controller: 'ContactController',
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
            });
    }
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
