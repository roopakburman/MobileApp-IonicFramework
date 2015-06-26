'use strict';
angular.module('starter.memberHome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/memberHome', {
    templateUrl: 'memberHome.html',
    controller: 'mHomeCtrl'
  });

}])

.controller('mHomeCtrl', mHomeFunc);

function mHomeFunc($scope, $window, $location){
	/* alert('Aloha home again!!'); */
/* 	$scope.go = function ( path ) {
  $location.path( path ); */
};

