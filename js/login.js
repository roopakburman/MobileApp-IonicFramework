'use strict';
angular.module('starter.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'loginCtrl'
  });
}])

.controller('loginCtrl', loginFunc);

function loginFunc($scope, $window, $location){
$scope.go = function ( path ) {
  $location.path( path );
};
$scope.login = function(){		
		var ref = new Firebase("https://glowing-fire-7224.firebaseio.com/");
		
		ref.authWithPassword({
		email : $scope.user.userName,
		password : $scope.user.password
		}, function(error, authData) {
		if (error) {
		console.log("Login Failed!", error);
		} else {
		console.log("Authenticated successfully with payload:", authData);
			 if(authData.password.email =='r@test.com'){
/* 				window.location.href = '/app/#/view1/';}
			 else{window.location.href = '/app/#/view2/';}  */
			 
			 window.location.href = '/app/angularjs_spa/#/view1/';}
			 else{window.location.href = '/app/angularjs_spa/#/view2/';}
		}
		},{
			remember: "sessiononly"
		});

		}
	
}