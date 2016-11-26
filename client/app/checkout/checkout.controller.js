'use strict'

angular.module('lakhaanaApp')
  .controller('CheckoutCtrl', function ($scope, $location, shareData, Auth, shareData2) {
    var total = 0
    $scope.userLoggedIn = Auth.isLoggedIn();
    var send = shareData2.get();
    var res_phone = send[0]
    var min_delivery = send[1]

    $scope.order = shareData.get();
    var in_order = $scope.order;

    var food = {}
    $.each($scope.order, function (key, value) {
      total = total + (value.price * value.quantity)
    })

    $scope.totalCost = total;
    var tax = 50
    if(total <= min_delivery){
      $scope.min_delivery_tax = tax
      $scope.totalCost = $scope.totalCost + tax
    }

    $scope.payment = function (value) {
      if (value === 'online') {
        $location.path('/payment')
      }
      else {
        in_order.total = total;
        in_order.date = Date.now();
        shareData2.store([total, res_phone])
        shareData.store(in_order)
        $location.path('/cod')
      }
    }
  })
