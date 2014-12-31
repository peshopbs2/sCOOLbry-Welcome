'use strict';

angular.module('scoolbryWelcomeApp')
  .service('userPending', function () {

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