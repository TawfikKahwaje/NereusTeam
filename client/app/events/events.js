angular.module('Khitwa.events', [])
.controller('EventsCtrl', function ($scope, Events) {
	$scope.data={};
	Events.getEvents()
	.then(function(events){
		$scope.data.events = events;
	})
	.catch(function(error){
		console.error(error)
	})
});