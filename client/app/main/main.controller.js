'use strict';

angular.module('scoolbryWelcomeApp')
  .controller('MainCtrl', function ($scope, $http, $location, $route, $timeout, userPending, $cookieStore, toaster) {
 
    // Get library ID from cookies
    $scope.libraryID = $cookieStore.get('libraryID');

    // Watch for online/offline
    var connectionCounter = 0;

    $scope.$watch('online', function(newStatus) {
      console.log(newStatus);
      if(newStatus) {
        if(connectionCounter>0) {
          toaster.clear();
          toaster.pop('success', 'Online', 'Internet connection restored!');
        }
        $scope.authentication.id.$setValidity('online', true);
      } else {
        toaster.pop('error', 'Offline', 'No Internet connection!', 0);
        $scope.authentication.id.$setValidity('online', false);
      }
      connectionCounter++;
    });

    // Get library ID if not configured
    $scope.getLibraryID = function() {
      var url = 'http://www.scoolbry.com/api/library/getLibraryID/' + $scope.barcodeID;
      $http.get(url).
      success(function(id) {
        $cookieStore.put('libraryID', id);
        toaster.pop('success', 'Library ID set successfully', 'Refreshing in 5 seconds.');
        $timeout($route.reload, 5000);
      }).
      error(function(error, status) {
        toaster.pop('error', 'Error code: ' + status, error);
      });
    };

  // Get user current interactions
  $scope.sendBarcode = function() {

    var url = 'http://www.scoolbry.com/api/library/pending/' + $scope.libraryID + '/' + $scope.barcodeID;
    $http.get(url).
    success(function(pendings) {
      if(pendings.length===0) {
        var newPendingData = ({});
        newPendingData.type = 'other';
        newPendingData.barcode = $scope.barcodeID;

        pendings.push(newPendingData);
      } else {
        pendings[0].barcode = $scope.barcodeID;
      }
      userPending.set(pendings);
      $location.path('/pending');
    }).
    error(function(error, status) {
      if(status===0) {
        toaster.pop('error', 'Error code: 503', 'Service temporarily unavailable. Try again later.');
      } else {
        toaster.pop('error', 'Error code: ' + status, error);
      }
    });
  };
  });
