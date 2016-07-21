angular.module('Khitwa.event', [])
.controller('EventCtrl', function ($scope, Event) {
	$scope.data={};
	$scope.showEvent = function(){
		Event.getEvent()
		.then(function(event){
			$scope.data.event = event;
		})
		.catch(function (error) {
        console.error(error);
      });
	}	
});