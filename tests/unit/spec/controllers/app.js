/*
   Ivan Bacher
   C10736831
   ivan.bacher@mydit.ie

   Unit test for angularJS controller
*/

'use strict';

describe('Controller: appCtrl', function () {

  // load the controller's module
  beforeEach(module('esExploreApp'));

  var appCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach( inject( function ( $controller, $rootScope ) {
    scope = $rootScope.$new();
    appCtrl = $controller('appCtrl', {
      $scope: scope
    });
  }));


  it('should be decalred', function () {
    expect(scope).toNotBe(undefined);
  });
  /*
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
	*/

});