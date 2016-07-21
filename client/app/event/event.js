angular.module('Khitwa.event', [])
.controller('EventCtrl', function ($scope, Event) {
	$scope.event={};
	$scope.showEvent = function(){
		Event.getEvent()
	}	
});