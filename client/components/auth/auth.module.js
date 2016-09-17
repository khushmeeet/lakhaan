'use strict';

angular.module('lakhaanaApp.auth', [
  'lakhaanaApp.constants',
  'lakhaanaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
