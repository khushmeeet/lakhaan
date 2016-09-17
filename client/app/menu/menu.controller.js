'use strict';

angular.module('lakhaanaApp')
  .controller('MenuCtrl',function($scope,$stateParams,$location,menuService,Auth,shareData,userService){
    $scope.order = [];
    var i=0;
    menuService.get({id:$stateParams.id},
      function success(response){
        $scope.res_obj = {name: response.name, spec: response.speciality, address: response.address};
        $scope.menuObject = response.menu;
        $scope.keys = Object.keys($scope.menuObject);
      },
      function error(errorResponse){
        console.log(errorResponse);
      });

      $scope.addItem = function(quantity,name,price){
        var obj={'name':name,'quantity':quantity,'price':price};
        $scope.order[i]=obj;
        i++;
        console.log($scope.order);
      };

      $scope.checkout = function () {
        var id = Auth.getCurrentUser()._id;
        console.log(id);
        /*userService.update({id:id},{'order':[$scope.order]},
          function success(response) {
            console.log(response);
          },
          function error(error) {
            console.log(error);
          });*/
          shareData.store($scope.order);
          $location.path('/checkout');
      };
  });
