'use strict'

angular.module('lakhaanaApp')
  .controller('CheckoutCtrl', function ($scope, $location, shareData, Auth, shareData2) {
    var total = 0
    $scope.userLoggedIn = Auth.isLoggedIn();

    $scope.order = shareData.get()
    var in_order = $scope.order

    var food = {}
    for (var i = 0; i < in_order.length; i++) {
      food = in_order[i]
      total = total + (food.price * food.quantity)
    }
    $scope.totalCost = total;

    $scope.payment = function (value) {
      if (value === 'online') {
        $location.path('/payment')
      }
      else {
        shareData2.store(total)
        shareData.store(in_order)
        $location.path('/cod')
      }
    }
  })
