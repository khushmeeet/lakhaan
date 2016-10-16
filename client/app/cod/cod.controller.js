'use strict';
(function(){

function CodComponent($scope) {
  $scope.message = 'Hello';
}

angular.module('lakhaanaApp')
  .component('cod', {
    templateUrl: 'app/cod/cod.html',
    controller: CodComponent
  });

})();
