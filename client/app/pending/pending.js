'use strict';

angular.module('scoolbryWelcomeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pending', {
        templateUrl: 'app/pending/pending.html',
        controller: 'PendingCtrl'
      });
  });
