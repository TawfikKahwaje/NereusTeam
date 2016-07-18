var mongoose = require('mongoose');
var User = require('../users/userModel.js');

var eventSchema = Schema({
  _id: {
    type: String,
    required: true,
    unique: true
  },
  title : {
  	type : String,
  	required : true;
  },
  _owner : { 
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'User'
  },
  startDate : Date
  endDate : Date
  location : String,
  locationId : String,
  type : String,
  description : String,
  skillsrequired : [String],
  startHour : String ,
  endHour : String,
  poster : String
});


module.exports = mongoose.model('events', eventSchema);