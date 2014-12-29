'use strict';

describe('Service: userPending', function () {

  // load the service's module
  beforeEach(module('scoolbryWelcomeApp'));

  // instantiate service
  var userPending;
  beforeEach(inject(function (_userPending_) {
    userPending = _userPending_;
  }));

  it('should do something', function () {
    expect(!!userPending).toBe(true);
  });

});
