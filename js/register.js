'use strict';
angular.module('starter.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register.html',
    controller: 'registerCtrl'
  });
}])

.controller('registerCtrl', registerFunc);

function registerFunc(){
	/* alert('Aloha!!'); */
	
}