'use strict'

angular.module('lakhaanaApp')
  .controller('CheckoutCtrl', function ($scope, $location, shareData, Auth, shareData2) {
    if(getCookie('foodlee') != ' ') {
      $scope.order = getCookie('foodlee')
      console.log($scope.order)
    }

    var total = 0
    $scope.userLoggedIn = Auth.isLoggedIn();
    var send = shareData2.get();
    var res_phone = send[0]
    var min_delivery = send[1]

    $scope.order = shareData.get();
    var in_order = $scope.order;

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length,c.length);
          }
      }
      return "";
   }

    var food = {}
    $.each($scope.order, function (key, value) {
      if(key != 'id') {
        total = total + (value.price * value.quantity)
      }
    })

    $scope.totalCost = total;

    $scope.cgst = ($scope.totalCost * 2.5) / 100
    $scope.sgst = ($scope.totalCost * 2.5) / 100

    // $scope.vat_tax = ($scope.totalCost * 14.50 ) / 100
    // $scope.st_tax = ($scope.totalCost * 5.6) / 100
    // $scope.sb_tax = ($scope.totalCost * 0.2) / 100
    // $scope.kk_tax = ($scope.totalCost * 0.2) / 100

    var delivery_charge = 50
    if(total <= min_delivery) {
      $scope.min_delivery_tax = delivery_charge
      $scope.totalCost = $scope.totalCost + delivery_charge
    }

    total = $scope.totalCost + $scope.cgst + $scope.sgst
    $scope.totalCost = total

    function setCookie(cname, cvalue, min) {
      var d = new Date();
      d.setTime(d.getTime() + (min*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
    }

    $scope.login = function () {
      $location.path('/login')
      setCookie('foodlee',in_order, 0.5)
    }

    $scope.payment = function (value) {
      if (value === 'cod') {
        in_order.total = total;
        in_order.date = Date.now();
        shareData2.store([total, res_phone])
        shareData.store(in_order)
        $location.path('/cod')
      }
    }
  })
