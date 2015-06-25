'use strict';
angular.module('starter.follow', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('follow', {
    templateUrl: 'follow.html',
    controller: 'followCtrl'
  });
}])

.controller('followCtrl', followFunc);

function followFunc(){
	/* alert('Aloha - follow me not!!'); */
	
}