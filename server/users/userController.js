//var linksController = require('../users/userController.js');
var userController = require('../users/userController.js');
var eventController = require('../events/eventController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {

  app.post('/api/users/signin', userController.signin);

  /*
    Test 'Post'
    http://127.0.0.1:8000/api/users/signup
    Body : {
        "username" : "tawfik",
        "password" : "admin"
    }
  */
  app.post('/api/users/signup', userController.signup);


  /*
    Test : Post
    http://127.0.0.1:8000/api/users/signin
    body :
    {
      "username" : "admin",
      "password" : "admin"
    }
  */
  app.get('/api/users/signedin', userController.checkAuth);



  /*
    Test : Get
    http://127.0.0.1:8000/api/events
  */
  app.get('/api/events',eventController.allEvents);


  /* 
    Test : Post
    http://127.0.0.1:8000/api/createEvent
    body :
    {
      "title" : "first Event",
      "_owner" : "5791c2946b44ec0c052b6c7a",
      "startDate" : "22/7/2016",
      "endDate" : "26/7/2016",
      "location" : "Amman",
      "locationId" : " ",
      "type" : "cultural",
      "description" : "samera and so3 is new envent",
      "skillsrequired" : ["a1","a2","a3"],
      "startHour" : "5 PM" ,
      "endHour" : "10 PM",
      "poster" : "adfghj/jpg"
    }
  */
  app.post('/api/createEvent',eventController.newEvent);



  /*
    Test : Get
    http://127.0.0.1:8000/api/event/5791c53e990f8c9c16839fbd
  */
  app.get('/api/event/:id',eventController.getEvent);


  //app.get('/api/users',userController.allUser);

  // app.get('/api/links/', linksController.allLinks);
  // app.post('/api/links/', linksController.newLink);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

