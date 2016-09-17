'use strict';

angular.module('lakhaanaApp')
  .factory('createOrder',function ($resource) {
    return $resource('https://api.juspay.in/order/create',{},{
      save:{
        method:'POST',
        header:{'Content-Type': 'application/json'}
      }
    });
  });
