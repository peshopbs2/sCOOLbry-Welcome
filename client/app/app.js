'use strict';

angular.module('scoolbryWelcomeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'timer',
  'toaster'
])

  .run(function($window, $rootScope) {
      $rootScope.online = navigator.onLine;
      $window.addEventListener('offline', function () {
        $rootScope.$apply(function() {
          $rootScope.online = false;
        });
      }, false);
      $window.addEventListener('online', function () {
        $rootScope.$apply(function() {
          $rootScope.online = true;
        });
      }, false);
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });