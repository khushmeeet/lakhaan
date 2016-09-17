'use strict';

describe('Controller: CardCtrl', function () {

  // load the controller's module
  beforeEach(module('lakhaanaApp'));

  var CardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CardCtrl = $controller('CardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
