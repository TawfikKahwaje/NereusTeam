angular.module('Khitwa.event', [])
.controller('EventCtrl', function ($scope, Events,$window, $routeParams, Auth) {
	$scope.signout = function(){
		Auth.signout();
	}

	$scope.showEvent = function(){
		Events.getEvent($routeParams.id)
		.then(function(event){
			$scope.event = event;
		})
		.catch(function (error) {
        console.error(error);
      });
	}
	$scope.showEvent();
});