// 'use strict';

// var webresApp = angular.module('WebResApp', []);
var webresApp = angular.module('webresApp', ['ngRoute']);
webresApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/infoModule.html',
      controller: 'CvCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    });
  }]);



// var app = angular.module("WebResApp", []);

