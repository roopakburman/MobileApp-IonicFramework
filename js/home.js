'use strict';
angular.module('starter.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('global/home', {
    templateUrl: 'home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', homeFunc);

function homeFunc(){
	/* alert('Aloha home again!!'); */
	
}