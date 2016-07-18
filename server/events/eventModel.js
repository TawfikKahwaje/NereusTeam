var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    unique: true
  },
  title : {
  	type : String,
  	required : true
  },
  _owner : { 
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'User'
  },
  startDate : Date,
  endDate : Date,
  location : String,
  locationId : String,
  type : String,
  description : String,
  skillsrequired : [String],
  startHour : String ,
  endHour : String,
  poster : String
});
var Event=mongoose.model('Event', eventSchema);

module.exports = Event;