var mongoose = require('mongoose');
var Org1Schema = mongoose.Schema({

  orgId: {type:String, required: true},
  orgName: {type:String, required: true},
  orgAddr: {type:String, required: true},
  orgMail: {type:String, required: true},
  orgPhnum: {type:String, required: true},

  registerPassword: {type:String, required: true}




});
var Org1 = module.exports = mongoose.model('Org1', Org1Schema);
