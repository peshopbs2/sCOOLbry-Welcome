'use strict';

angular.module('scoolbryWelcomeApp')
  .controller('MainCtrl', function ($scope, $http, userPending, $location, $route) {
 
  	$scope.libraryID = '5435728127965d5d083da959';

	$scope.sendBarcode = function() {

		console.log($scope.libraryID);
		console.log($scope.barcodeID);

		var url = 'http://www.scoolbry.com/api/library/pending/' + $scope.libraryID + '/' + $scope.barcodeID;
		$http.get(url).success(function(pending) {
			pending[0].barcode = $scope.barcodeID;
			userPending.set(pending);
			$location.path('/pending');
		});
	};
  });
