'use strict';
(function () {

  function OrdersComponent($scope, User) {
    User.get('me', function (detail) {
      console.log(detail);
      $scope.orderList = detail.order;
    });
  }

  angular.module('lakhaanaApp')
    .component('orders', {
      templateUrl: 'app/orders/orders.html',
      controller: OrdersComponent
    });

})();
