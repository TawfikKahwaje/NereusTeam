angular.module('Khitwa.services', [])

.factory('Events', function ($http) {
	var getEvents = function () {
		return $http({
			method: 'GET',
			url: '/api/events'
		})
		.then(function (res) {
			return res.data;
		});
  }
  var createEvent = function (event) {
      return $http({
        method: 'POST',
        url: '/api/createEvent',
        data: event
      })
    }
//need fixing: how to get an event based on their id
  var getEvent = function(eventId){
    return $http({
      method: 'GET',
      url: '/api/event/'+eventId
      // data: id
    })
    .then(function(resp){
      return resp.data;
    });
  }  
	return {
		getEvents: getEvents,
    createEvent: createEvent,
    getEvent: getEvent
	};
})

.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.Khitwa'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.Khitwa');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.Khitwa');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
