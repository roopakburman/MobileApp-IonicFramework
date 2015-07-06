/* var app = angular.module('starter', ['ionic', 'ngRoute', 'starter.home', 'starter.menu', 'starter.settingsPage', 'starter.register', 'starter.follow', 'starter.login', 'starter.memberHome'])
app.config(function($stateProvider) {
  $stateProvider
  .state('starter', {
    url: '/home',
    templateUrl: 'home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'register.html'
  });
}); */
var app = angular.module('starter', ['ionic', 'ngRoute', 'starter.home', 'starter.menu', 'starter.settingsPage', 'starter.register', 'starter.follow', 'starter.login', 'starter.memberHome'])
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/starter', {
    templateUrl: 'home.html',
    controller: 'homeCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/register'});
}])
app.controller('homeCtrl', function homeFunc($scope, $location) {
   	$scope.isActive = function (viewLocation) { 
        return (viewLocation === $location.path());
    };
	})

/* .controller('SideMenuCtrl', function sideMenuFunc($scope, $ionicSideMenuDelegate){
	$scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}); */

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


