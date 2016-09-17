'use strict';

angular.module('lakhaanaApp')
  .factory('menuService',function($resource){
    return $resource('/api/restaurants/:id',{id:'@_id'},{
      get:{
        method:'GET'
      },
      query:{
        method:'GET',
        isArray:true
      }
    });
  })

  .factory('userService',function ($resource) {
    return $resource('/api/users/:id',{id:'@_id'},{
      update:{
        method:'PUT'
      }
    });
  })

  .factory('shareData',function(){
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
