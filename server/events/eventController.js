var Event=require('./eventModel.js');
var Q = require('q');

var findEvent = Q.nbind(Event.findOne, Event);
var createEvent = Q.nbind(Event.create, Event);
var findAllEvents = Q.nbind(Event.find, Event);

module.exports ={

	allEvents : function (req,res,next) {
		findAllEvents({})
			.then(function (events) {
				res.json(events);
			})
			.fail(function (err) {
				next(err);
			})
	}
	// allLinks: function (req, res, next) {
 //  findAllLinks({})
 //    .then(function (links) {
 //      res.json(links);
 //    })
 //    .fail(function (error) {
 //      next(error);
 //    });
 //  },



}