'use strict';

angular.module('lakhaanaApp')
  .controller('MainController', function ($http, socket, $scope, $state) {
    this.$http = $http;
    this.restaurants = [];
    $scope.max_rating = 5;
    $scope.readOnly = true;
    $scope.rrating = 3;

    $http.get('/api/restaurants').then(response => {
      this.restaurants = response.data;
      socket.syncUpdates('restaurant', this.restaurants);
    });
    $scope.menu = function (id) {
      $state.go('menu', {
        id: id
      });
    };
  });
