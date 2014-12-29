'use strict';

angular.module('scoolbryWelcomeApp')
  .controller('MainCtrl', function ($scope, $http, userPending, $location) {
 
  	$scope.libraryID = '5435728127965d5d083da959';

	$scope.awesomeThings = [];
	$http.get('/api/things').success(function(awesomeThings) {
	  $scope.awesomeThings = awesomeThings;
	});




	$scope.sendBarcode = function() {

		var url = 'http://www.scoolbry.com/api/library/pending/' + $scope.libraryID + '/' + $scope.barcodeID;

		$http.get(url).success(function(pending) {

			userPending.set(pending);

			$location.path('/pending');



		});

	};

  });
