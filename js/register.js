'use strict';
angular.module('starter.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register.html',
    controller: 'registerCtrl'
  });
}])

.controller('registerCtrl', registerFunc);

function registerFunc($scope, $window, $location){
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


$scope.register = function(){
	    var ref = new Firebase("https://glowing-fire-7224.firebaseio.com/");
		ref.createUser({
		email : $scope.user.usrName,
		password : $scope.user.passwrd
		}, function(error, userData) {
		if (error) {
		console.log("Error creating user:", error);
		} else {
		console.log("Successfully created user account with uid:", userData.uid);
		}

		});
}	
}