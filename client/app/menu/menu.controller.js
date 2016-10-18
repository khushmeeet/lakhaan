'use strict';

angular.module('lakhaanaApp')
  .controller('MenuCtrl', function ($scope, $stateParams, $location, menuService, Auth, shareData, userService) {
    $scope.order = {};
    var i = 0;
    $scope.quantity = 1;
    menuService.get({ id: $stateParams.id },
      function success(response) {
        $scope.res_obj = { name: response.name, spec: response.speciality, address: response.address };
        $scope.menuObject = response.menu;
        $scope.keys = Object.keys($scope.menuObject);
      },
      function error(errorResponse) {
        console.log(errorResponse);
      });

    $scope.addItem = function (quantity, name, price) {
      var obj = { 'name': name, 'quantity': quantity, 'price': price };
      $scope.order[i] = obj;
      i++;
      $scope.quantity = 1;
    };

    $scope.deleteItem = function (item) {
      var index = $scope.order.indexOf(item);
      $scope.order.splice(index, 1);
    }

    $scope.continue = function () {
      var id = Auth.getCurrentUser()._id;
      shareData.store($scope.order);
      console.log($scope.order)
      $location.path('/checkout');
    };
  }).filter('underscoreless', function () {
    return function (input) {
      return input.replace(/_/g, ' ');
    };
  }).filter('capitalize', function () {
    return function (input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
  });
