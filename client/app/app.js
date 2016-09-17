'use strict';

angular.module('lakhaanaApp', [
  'lakhaanaApp.auth',
  'lakhaanaApp.admin',
  'lakhaanaApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ngRoute',
  'ui.bootstrap',
  'angular-hmac-sha512',
  'validation.match',
  'ngMaterial'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
