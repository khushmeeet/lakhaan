'use strict';

angular.module('lakhaanaApp')
  .controller('MainController', function ($http, socket, $scope, $state) {
    this.$http = $http;
    this.restaurants = [];

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
