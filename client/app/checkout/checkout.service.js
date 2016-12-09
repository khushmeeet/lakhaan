'use strict';

angular.module('lakhaanaApp')
  .factory('sendSMS', function ($resource) {
    return $resource('https://control.msg91.com/api/sendhttp.php', {
      authkey: '133386AMaB5ImNjl584ab985',
      mobiles: '9944490111,9161999900',
      message: 'this is message',
      sender: 'HP-FOODLE',
      route: '4',
      country: '91',
      response: 'json'
    }, {
        get: {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
          }
        }
      });
  })

  .factory('shareData2', function () {
    var mem;
    return {
      store: function (order) {
        mem = order;
      },
      get: function () {
        return mem;
      }
    };
  });
