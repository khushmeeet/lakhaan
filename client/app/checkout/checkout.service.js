'use strict';

angular.module('lakhaanaApp')
  .factory('createOrder',function ($resource) {
    return $resource('https://api.juspay.in/order/create',{},{
      save:{
        method:'POST',
        header:{'Content-Type': 'application/json'}
      }
    });
  })

    .factory('shareData2',function(){
      var mem;
      return {
          store: function (order) {
              mem=order;
          },
          get: function () {
              return mem;
          }
      };
  });
