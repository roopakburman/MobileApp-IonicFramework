// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngRoute', 'starter.home', 'starter.menu', 'starter.settingsPage', 'starter.register', 'starter.follow', 'starter.login', 'starter.memberHome'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/starter', {
    templateUrl: 'home.html',
    controller: 'homeCtrl'
  });
/*  */
  $routeProvider.otherwise({redirectTo: '/register'});
 
}])

.controller('homeCtrl', homeFunc);
/*With $scope*/
function homeFunc($scope, $location) {
   
	$scope.isActive = function (viewLocation) { 
        return (viewLocation === $location.path());
    };
	
/* 	$scope.getAccess = function(){
		this.access = true;
	}; */
	
	};


/* starter.factory('accessFac',function(){
	var obj = {}
	this.access = false;
	obj.getPermission = function(){    //set the permission to true
		this.access = true;
	}
	obj.checkPermission = function(){
		return this.access;				//returns the users permission level 
	}
	return obj;
}); */

/* starter.controller('homeCtrl',function($scope, accessFac){
	$scope.getAccess = function(){
		accessFac.getPermission();       //call the method in acccessFac to allow the user permission.
	}
}


) */










/* .run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at 
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
}); */


