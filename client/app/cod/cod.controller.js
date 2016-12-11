'use strict';
(function () {

  function CodComponent($scope, shareData2, shareData, User, Auth, $mdToast, sendSMS) {
    $scope.total = shareData2.get()
    var order = shareData.get()
    console.log($scope.total,order)
    $scope.placeOrder = function (form) {
      if (form) {
        User.updateOrder({ id: Auth.getCurrentUser()._id }, { order: order },
          function success(response) {
            console.log(response)
          },
          function error(error) {
            console.log(error)
          })
        var toast = $mdToast.simple()
          .textContent('Your order is placed, Thank you!')
          .action('OK')
          .highlightAction(false)
          .position('bottom');
        $mdToast.show(toast);
        sendSMS.query({
          authkey: '133386AMaB5ImNjl584ab985',
          mobiles: '9161999900'+','+$scope.total[1],
          message: JSON.stringify(order),
          sender: 'FOODLE',
          route: 4,
          country: 91,
          response: 'json'
        });
      }
    }
  }

  angular.module('lakhaanaApp')
    .component('cod', {
      templateUrl: 'app/cod/cod.html',
      controller: CodComponent
    });

})();
