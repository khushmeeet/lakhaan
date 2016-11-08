'use strict';

angular.module('lakhaanaApp')
  .controller('PaymentCtrl', function ($scope, createOrder, Auth, shareData2) {
    $scope.message = 'Hello';
    var total = 0;
    var order_id;

    var order = shareData2.get();
    console.log(order);

    $scope.getTotal = function () {
      for (var i = 0; i < $scope.order.length; i++) {
        var food = $scope.order[i];
        total += (food.price * food.quantity);
      }
      return total;
    };

    $scope.checkout = function () {
      createOrder.save({}, {
        'order_id': $scope.orderID,
        'amount': order,
        'currency': 'INR',
        'customer_email': Auth.getCurrentUser().email,
        'customer_phone': $scope.phone,
        'return_url': '',
        'shipping_address_line1': $scope.block,
        'shipping_address_line2': $scope.roomNo
      },
        function success(response) {
          order_id = response.order_id;
          console.log(response);
        },
        function error(error) {
          console.log(error);
        });
    };
  });
