'use strict';

angular.module('lakhaanaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cod', {
        url: '/cod',
        template: '<cod></cod>'
      });
  });
