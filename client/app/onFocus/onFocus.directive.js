'use strict';

angular.module('scoolbryWelcomeApp')
  .directive('onFocus', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
      	element.focus();
      }
    };
  });