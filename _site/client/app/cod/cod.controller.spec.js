'use strict';

describe('Component: CodComponent', function () {

  // load the controller's module
  beforeEach(module('lakhaanaApp'));

  var CodComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CodComponent = $componentController('CodComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
