'use strict';

angular.module('lakhaanaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('payment', {
        url: '/payment',
        templateUrl: 'app/payment/payment.html',
        controller: 'PaymentCtrl'
      });
  });
