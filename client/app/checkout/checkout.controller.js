'use strict';

angular.module('lakhaanaApp')
  .controller('CheckoutCtrl',function ($scope,$location,shareData,Auth,createOrder) {
    var total = 0;

    $scope.order = shareData.get();
    console.log($scope.order);

    $scope.getTotal = function(){
      for(var i = 0; i < $scope.order.length; i++){
          var food = $scope.order[i];
          total += (food.price * food.quantity);
        }
      return total;
    };

    //$scope.checkout = function(){
      //$location.path('/payment');
    //};

  });
