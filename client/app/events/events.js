angular.module('Khitwa.events', [])
.controller('EventsCtrl', function ($scope, Events,$location) {
	$scope.data={};
	Events.getEvents()
	.then(function(events){
		$scope.data.events = events;
	})
	.catch(function(error){
		console.error(error)
	})
});