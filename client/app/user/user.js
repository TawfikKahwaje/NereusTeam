angular.module('Khitwa.user', [])
.controller('UserCtrl', function ($scope,$window, Events, $routeParams) {
	$scope.showUser = function (){
		Events.getUser($routeParams.id)
		.then(function(user){
			$scope.user = user;
		})
		.catch(function (error) {
			console.error(error)
		})
	}
	$scope.showUser();
});