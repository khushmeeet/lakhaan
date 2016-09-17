'use strict';

angular.module('lakhaanaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menu', {
        url: '/menu/:id',
        templateUrl: 'app/menu/menu.html',
        controller: 'MenuCtrl'
      });
  });
