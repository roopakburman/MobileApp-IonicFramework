'use strict';
angular.module('starter.mHome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/memberPages', {
    templateUrl: 'memberHome.html',
    controller: 'mHomeCtrl'
  });
}])

.controller('mHomeCtrl', homeFunc);

function homeFunc(){
	/* alert('Aloha home again!!'); */
	
}