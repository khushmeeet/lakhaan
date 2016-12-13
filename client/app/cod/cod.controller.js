'use strict';
(function () {

  function CodComponent($scope, shareData2, shareData, User, Auth, $mdToast, sendSMS, shareData3) {
    $scope.total = shareData2.get()
    var order = shareData.get()
    var resName = shareData3.get() 

    $scope.placeOrder = function (form) {
      if (form) {
        User.updateOrder({ id: Auth.getCurrentUser()._id }, { order: order },
          function success(response) {
            console.log(response)
          },
          function error(error) {
            console.log(error)
          })
        var orderText = $scope.name+'\n'+$scope.phone+'\n'+$scope.address+'\n'
        orderText += '---------------------\n'
        orderText += 'Restaurant' + resName + '\n'
        _.forOwn(order, function (value,key) {
          orderText += '\n'
          _.forOwn(value, function (value,key) {
            orderText += key + ':'
            orderText += value
            orderText += '\n'
          })
        })
        var toast = $mdToast.simple()
          .textContent('Your order is placed, Thank you!')
          .action('OK')
          .highlightAction(false)
          .position('bottom');
        $mdToast.show(toast);
        sendSMS.query({
          authkey: '133386AMaB5ImNjl584ab985',
          mobiles: '9161999900',
          message: orderText,
          sender: 'FOODLE',
          route: 4,
          country: 91,
          response: 'json'
        });
        sendSMS.query({
          authkey: '133386AMaB5ImNjl584ab985',
          mobiles: $scope.phone,
          message: 'Thank you for placing the order. Your order amounting to '+$scope.total[0]+' will be delivered soon.',
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
