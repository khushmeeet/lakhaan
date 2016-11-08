'use strict';

angular.module('lakhaanaApp')
  .factory('cardPayment',function ($resource) {
    return $resource('https://api.juspay.in/txns',{},{
      save:{
        method:'POST',
        header:{'Content-Type': 'application/json'}
      }
    });
  });
