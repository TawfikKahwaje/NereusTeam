var Event=require('./eventModel.js');
var Q = require('q');
var jwt = require('jwt-simple');


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
				//next(err);
			})
	},

	newEvent: function (req, res, next) {
		console.log("enter")
		// var token = req.headers['x-access-token'];
		//    if (!token) {
		//      next(new Error('No token'));
		//    } else {
		//      var user = jwt.decode(token, 'secret');
		//  }
	  	var tempEvent = {
			title : req.body.title,
			_owner : req.body._owner,
			startDate : req.body.startDate,
			endDate : req.body.endDate,
			location : req.body.location,
			locationId : req.body.locationId,
			type : req.body.type,
			description : req.body.description,
			skillsrequired : req.body.skillsrequired,
			startHour : req.body.startHour ,
			endHour : req.body.endHour,
			poster : req.body.poster
	  	}
	  	//console.log(tempEvent);
	  	createEvent(tempEvent)
	  		.then(function (createdEvent) {
		        if (createdEvent) {
		        	console.log('event created');
		        	console.log(createdEvent);
		          res.json(createdEvent);
		        }
		      })
		      .fail(function (error) {
		        next(error);
		      });

  	},

  	
  	//Test
  	//http://127.0.0.1:8000/api/event/5790db44f97a940c03550a89

  	getEvent : function (req,res,next) {

  		 console.log(req.params.id);
  		 var id=(req.params.id).toString();

  		Event.findOne({_id: id}, function(err, doc) {
  			if(err)
  				res.status(500).send(err);
		  res.status(200).send(doc);
		});
  		
  	}

}