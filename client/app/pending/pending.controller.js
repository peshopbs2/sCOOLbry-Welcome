'use strict';

angular.module('scoolbryWelcomeApp')
  .controller('PendingCtrl', function ($scope, $timeout, $location, $route, $http, userPending, toaster, $cookieStore) {

    // Get pending request
    $scope.pendings = userPending.get();

    // Clear current request and set to default
    var returnToHomepage = function() {
      $location.path('/');
      $route.reload();
    };

    if($scope.pendings.length<1) {
      returnToHomepage();
    } else {
      $timeout(returnToHomepage, 60000);
    }


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

    // Separate the requests to bookings and readings
    $scope.bookings = [];
    $scope.readings = [];

    for(var i=0; i<$scope.pendings.length; i++) {
      if($scope.pendings[i].type === 'booking') {
        $scope.pendings[i].book.end = $scope.pendings[i].end;
        $scope.bookings.push($scope.pendings[i].book);
      } else if($scope.pendings[i].type === 'reading') {
        $scope.pendings[i].book.end = $scope.pendings[i].end;
        $scope.readings.push($scope.pendings[i].book);
      }
    }

    // Show all tabs in the accordion
    var iteratorBookings = 0,
      iteratorReadings = 0;

    if($scope.bookings.length>0) {
      $scope.bookings[0].open = true;
    }

    if($scope.readings.length>0) {
      $scope.readings[0].open = true;
  }

    var openNextTab = function() {
      if($scope.bookings.length>0) {
        $scope.bookings[iteratorBookings].open = true;
        iteratorBookings = (iteratorBookings<$scope.bookings.length-1) ? ++iteratorBookings : 0;
    }
      if($scope.readings.length>0) {
        $scope.readings[iteratorReadings].open = true;
        iteratorReadings = (iteratorReadings<$scope.readings.length-1) ? ++iteratorReadings : 0;
    }
        $timeout(openNextTab, 5000);
    };

  openNextTab();

  // Get library ID
  $scope.libraryID = $cookieStore.get('libraryID');

  // Scan barcode ID card
  $scope.sendBarcode = function() {
    // If the barcode is the same as the current => return to main page ; if not => show the new pendings
    if($scope.barcodeID === $scope.pendings[0].barcode) {
      $location.path('/');
      $route.reload();
    } else {
      var url = 'http://www.scoolbry.com/api/library/pending/' + $scope.libraryID + '/' + $scope.barcodeID;
      $http.get(url).
      success(function(pending) {
        pending[0].barcode = $scope.barcodeID;
        userPending.set(pending);
        $location.path('/pending');
        $route.reload();
      }).
      error(function(error, status) {
        toaster.pop('error', 'Error code: ' + status, error);
      });
    }
  };

 });
