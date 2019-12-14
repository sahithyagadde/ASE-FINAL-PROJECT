var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

  profId: {type:String, required: true},
  profName: {type:String, required: true},
  orgName1: {type:String, required: true},
  profMail: {type:String, required: true},
  orgAddr1: {type:String, required: true},

  profPhnum: {type:String, required: true},
  regPassword: {type:String, required: true}



});
var User = module.exports = mongoose.model('User', userSchema);



