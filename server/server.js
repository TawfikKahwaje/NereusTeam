var express = require('express');
var mongoose = require('mongoose');
var user=require('./users/userModel.js');
var user=require('./events/eventModel.js');

var app = express();

var mongoURI =  process.env.MONGODB_URI || 'mongodb://localhost/Khitwa';

var port = process.env.PORT || 8000;
// connect to mongo database named "surveyGS"
mongoose.connect(mongoURI);

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(8000);
console.log('listen to ');

// export our app for testing and flexibility, required by index.js
module.exports = app;
