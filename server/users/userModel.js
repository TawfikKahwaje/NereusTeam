var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
	userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
  	type: String,
  	required: true
  },
  lastName: {
  	type: String,
  	required: true
  },
  email: {
  	type: String,
  	required: true
  },
  dateOfBirth: {
  	type: String
  },
  gender: {
  	type: String
  },
  phoneNumber: {
  	type: String,
  	required: true
  },
  skills: {
  	type: String,
  	required: true
  },
  rate: Number,
  picture: String
});