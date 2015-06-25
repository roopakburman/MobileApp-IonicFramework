'use strict';
angular.module('starter.settingsPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/settingsPage', {
    templateUrl: 'settingsPage.html',
    controller: 'settingsPageCtrl'
  });
}])

.controller('settingsPageCtrl', settingsPageCtrlFunc);

function settingsPageCtrlFunc(){
	/* alert('Aloha settings to be!!'); */
	
}