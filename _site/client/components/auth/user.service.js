'use strict';

(function () {

  function UserResource($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    }, {
        changePassword: {
          method: 'PUT',
          params: {
            controller: 'password'
          }
        },
        get: {
          method: 'GET',
          params: {
            id: 'me'
          }
        },
        updateOrder: {
          method: 'PUT',
          params: {
            controller: 'updateOrder'
          }
        }
      });
  }

  angular.module('lakhaanaApp.auth')
    .factory('User', UserResource);

})();
