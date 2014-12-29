'use strict';

angular.module('scoolbryWelcomeApp')
  .service('userPending', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var pending = [];

    return {
        get: function () {
            return pending;
        },
        set: function(value) {
            pending = value;
        }
    };

  });
