'use strict';
angular.module('starter.menu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('menu', {
    templateUrl: 'menu.html',
    controller: 'menuCtrl'
  });
}])

.controller('menuCtrl', menuFunc);

function menuFunc(){
	/* alert('Aloha, menu it is!!'); */
	
}