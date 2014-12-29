'use strict';

angular.module('scoolbryWelcomeApp')
  .controller('PendingCtrl', function ($scope, userPending) {

  	$scope.pendings = userPending.get();

 	console.log($scope.pendings);
 });
