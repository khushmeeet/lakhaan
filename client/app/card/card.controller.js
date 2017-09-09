'use strict';

angular.module('lakhaanaApp')
  .controller('CardCtrl', function ($scope,cardPayment,shareData2) {
    $scope.message = 'Hello';

    var order_id = shareData2.get();

    // experimental
    $scope.cardpayment = function(){
      cardPayment.save({},{
        'order_id':order_id,
        'merchant_id':'',
        'payment_method_type':'CARD',
        'card_number':$scope.card_no,
        'card_exp_month':$scope.exp_month,
        'card_exp_year':$scope.exp_year,
        'name_on_card':$scope.name,
        'card_security_code':$scope.code,
        'save_to_locker':false,
        'redirect_after_payment':true,
        'format':'json'
      });
    };
  });
