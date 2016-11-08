'use strict';

angular.module('lakhaanaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('card', {
        url: '/card',
        templateUrl: 'app/card/card.html',
        controller: 'CardCtrl'
      });
  });
