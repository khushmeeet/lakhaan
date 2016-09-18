'use strict'

angular.module('lakhaanaApp')
  .controller('CheckoutCtrl', function ($scope, $location, shareData, Auth, createOrder) {
    var total = 0

    $scope.order = shareData.get()
    var in_order = $scope.order
    console.log($scope.order)

    var food = {}
    for (var i = 0; i < in_order.length; i++) {
      food = in_order[i]
      total = total + (food.price * food.quantity)
    }
    $scope.totalCost = total;

    // $scope.checkout = function(){
    // $location.path('/payment')
    // }

  })
