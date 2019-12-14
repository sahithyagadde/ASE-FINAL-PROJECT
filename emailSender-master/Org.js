var mongoose = require('mongoose');
var orgSchema = mongoose.Schema({
  orgId: {type:String, required: true},
  orgName: {type:String, required: true},
  orgAddr: {type:String, required: true},
  profMail: {type:String, required: true},
  orgPhnum: {type:String, required: true},
  registerUsername: {type:String, required: true},
  registerPassword: {type:String, required: true},

  registerPassword2: {type:String, required: true},


});
var Org = module.exports = mongoose.model('Org', orgSchema);
