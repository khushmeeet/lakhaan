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
    'angular-hmac-sha512',
    'validation.match',
    'ngMaterial',
    'jkAngularRatingStars'
  ])
  .config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

