'use strict';

angular.module('lakhaanaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orders', {
        url: '/orders',
        template: '<orders></orders>'
      });
  });
