'use strict';

angular.module('scoolbryWelcomeApp')
  .controller('PendingCtrl', function ($scope, $timeout, $location, $route, $http, userPending) {

  	// Scan barcode ID card
	$scope.sendBarcode = function() {
		// If the barcode is the same as the current => return to main page ; if not => show the new pendings
		if($scope.barcodeID === $scope.pendings[0].barcode) {
			$location.path('/');
			$route.reload();
		} else {
			var url = 'http://www.scoolbry.com/api/library/pending/' + $scope.libraryID + '/' + $scope.barcodeID;
			$http.get(url).success(function(pending) {
				pending[0].barcode = $scope.barcodeID;
				userPending.set(pending);
				$location.path('/pending');
				$route.reload();

			});
		}
	};

  	$scope.pendings = userPending.get();
  	//$scope.pendings = [{'type':'reading','book':{'_id':'547ef1da62cac40200a688bf','author':'Магдалина Тодорова','language':'bg','pages':'376','published':'1970-01-01T00:00:02.002Z','title':'Програмиране на C++','isbn':'9789546494542','publisher':'Ciela','__v':0,'uploaded':'2014-12-03T11:19:54.062Z','genres':[],'themes':['Обектно- ориентирано програмиране'],'cover':'/dist/images/missing-cover.png'},'end':'2015-01-28T13:28:51.440Z'},{'type':'reading','book':{'_id':'547ef1da62cac40200a688bf','author':'Магдалина Тодорова','language':'bg','pages':'376','published':'1970-01-01T00:00:02.002Z','title':'Програмиране на C++','isbn':'9789546494542','publisher':'Ciela','__v':0,'uploaded':'2014-12-03T11:19:54.062Z','genres':[],'themes':['Обектно- ориентирано програмиране'],'cover':'/dist/images/missing-cover.png'},'end':'2015-01-28T13:28:51.440Z'},{'type':'reading','book':{'_id':'547ef1da62cac40200a688bf','author':'Магдалина Тодорова','language':'bg','pages':'376','published':'1970-01-01T00:00:02.002Z','title':'Програмиране на C++','isbn':'9789546494542','publisher':'Ciela','__v':0,'uploaded':'2014-12-03T11:19:54.062Z','genres':[],'themes':['Обектно- ориентирано програмиране'],'cover':'/dist/images/missing-cover.png'},'end':'2015-01-28T13:28:51.440Z'},{'type':'reading','book':{'_id':'547ef1da62cac40200a688bf','author':'Магдалина Тодорова','language':'bg','pages':'376','published':'1970-01-01T00:00:02.002Z','title':'Програмиране на C++','isbn':'9789546494542','publisher':'Ciela','__v':0,'uploaded':'2014-12-03T11:19:54.062Z','genres':[],'themes':['Обектно- ориентирано програмиране'],'cover':'/dist/images/missing-cover.png'},'end':'2015-01-28T13:28:51.440Z'},{'type':'reading','book':{'_id':'547ef1da62cac40200a688bf','author':'Магдалина Тодорова','language':'bg','pages':'376','published':'1970-01-01T00:00:02.002Z','title':'Програмиране на C++','isbn':'9789546494542','publisher':'Ciela','__v':0,'uploaded':'2014-12-03T11:19:54.062Z','genres':[],'themes':['Обектно- ориентирано програмиране'],'cover':'/dist/images/missing-cover.png'},'end':'2015-01-28T13:28:51.440Z'},{'type':'reading','book':{'_id':'547ef1da62cac40200a688bf','author':'Магдалина Тодорова','language':'bg','pages':'376','published':'1970-01-01T00:00:02.002Z','title':'Програмиране на C++','isbn':'9789546494542','publisher':'Ciela','__v':0,'uploaded':'2014-12-03T11:19:54.062Z','genres':[],'themes':['Обектно- ориентирано програмиране'],'cover':'/dist/images/missing-cover.png'},'end':'2015-01-28T13:28:51.440Z'},{'type':'reading','book':{'_id':'5474bb700048c6020067dd2f','title':'Страховитото в историята: Англия','author':'Тери Диъри','illustrated':'Не','publisher':'Егмонт България','authorNationality':'Великобритания','language':'Български','description':'В тази книга се разкриват ужасните събития, които са направили Англия такава, каквато е днес – от времето на кръвожадните келти до безумния ХХ век. Тук ще разбереш: * Кой монах се е опитал да ощипе дявола по носа с щипка? * Защо някои хора през Средните векове са яли изпражнения на гълъби? * Кой крал е бил обвинен, че е върколак?Вражески нашествия, въстания и гражданска война, чума и пожари, ростбиф, риба и пържени картофи, чай – тук е събрано всичко, свързано с англичаните.Прочети за нещастията на средновековните монарси, открий десет начина да загинеш в мина през викторианската епоха и научи кои страшни дни от историята да отбелязваш с почивен ден от училище.','edition':'1','pages':'192','isbn':'9789542701064','__v':0,'uploaded':'2014-12-29T13:40:27.914Z','genres':['Научно-популярна'],'themes':['История'],'cover':'http://www.booksinprint.bg/images/PublicationImages/a2/86469.jpeg'},'end':'2015-01-27T09:00:15.023Z'},{'type':'booking','book':{'_id':'5474bb700048c6020067dd2f','title':'Страховитото в историята: Англия','author':'Тери Диъри','illustrated':'Не','publisher':'Егмонт България','authorNationality':'Великобритания','language':'Български','description':'В тази книга се разкриват ужасните събития, които са направили Англия такава, каквато е днес – от времето на кръвожадните келти до безумния ХХ век. Тук ще разбереш: * Кой монах се е опитал да ощипе дявола по носа с щипка? * Защо някои хора през Средните векове са яли изпражнения на гълъби? * Кой крал е бил обвинен, че е върколак?Вражески нашествия, въстания и гражданска война, чума и пожари, ростбиф, риба и пържени картофи, чай – тук е събрано всичко, свързано с англичаните.Прочети за нещастията на средновековните монарси, открий десет начина да загинеш в мина през викторианската епоха и научи кои страшни дни от историята да отбелязваш с почивен ден от училище.','edition':'1','pages':'192','isbn':'9789542701064','__v':0,'uploaded':'2014-12-29T13:40:27.995Z','genres':['Научно-популярна'],'themes':['История'],'cover':'http://www.booksinprint.bg/images/PublicationImages/a2/86469.jpeg'},'end':'2014-12-31T16:00:00.357Z'},{'type':'booking','book':{'_id':'549ed76a5f36bd02004c2dfb','title':'Кандидатстудентски конкурси по математика','author':'Керопе Чакърян,Пламен Сидеров','published':'1970-01-01T00:00:02.005Z','pages':'224','language':'bg','isbn':'9789548857079','publisher':'Веди','__v':0,'uploaded':'2014-12-27T15:59:38.480Z','genres':[],'themes':['Matematika - zadachi - reshenie - uchebni pomagala'],'cover':'/dist/images/missing-cover.png'},'end':'2014-12-31T16:00:00.000Z'}];

  	$scope.bookings = [];
  	$scope.readings = [];

  	for(var i=0; i<$scope.pendings.length; i++) {
  		if($scope.pendings[i].type === 'booking') {
  			$scope.pendings[i].book.end = $scope.pendings[i].end;
  			$scope.bookings.push($scope.pendings[i].book);
  		} else {
  			$scope.pendings[i].book.end = $scope.pendings[i].end;
  			$scope.readings.push($scope.pendings[i].book);
  		}
  	}

  	if($scope.bookings.length>0) {
  		$scope.bookings[0].open = true;
  	}

  	if($scope.readings.length>0) {
	  	$scope.readings[0].open = true;
	}
    var iteratorBookings = 0,
    	iteratorReadings = 0;

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
    }

    openNextTab();

    var returnToHomepage = function() {
    	$location.path('/');
    	$route.reset;
    }

    $timeout(returnToHomepage, 60000);

  	$scope.libraryID = '5435728127965d5d083da959';





 });
