angular.module('Khitwa.createEvent', [])
//user can create event
.controller('CreateEventCtrl', function ($scope, $location, Events) {
	$scope.event={};
	$scope.addEvent = function () {
		Events.createEvent($scope.event)
		.then(function () {
			$location.path('/event');
		})
		.catch(function (error) {
			console.error(error)
		})
	}
});