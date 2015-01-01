'use strict';

describe('Controller: PendingCtrl', function () {

  // load the controller's module
  beforeEach(module('scoolbryWelcomeApp'));

  var PendingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PendingCtrl = $controller('PendingCtrl', {
      $scope: scope
    });
  }));

});
