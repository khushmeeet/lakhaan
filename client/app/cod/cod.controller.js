'use strict';
(function () {

  function CodComponent($scope, shareData2, shareData, User, Auth, $mdToast, sendSMS) {
    $scope.total = shareData2.get()
    var order = shareData.get()

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
      }
    }

    sendSMS.query({
      authkey: '129164AppiG3Vti4b580c95b8',
      mobiles: '9944490100',
      message: 'this is message',
      sender: 'HP-FOODLE',
      route: 4,
      country: 91,
      response: 'json'
    });
  }

  angular.module('lakhaanaApp')
    .component('cod', {
      templateUrl: 'app/cod/cod.html',
      controller: CodComponent
    });

})();
