var mongoose = require('mongoose');
var quessetSchema = mongoose.Schema({
  quessetName: {type:String, required: true},
  ques1: {type:String, required: true},
  ques2: {type:String, required: true},
  ques3: {type:String, required: true},
  ques4: {type:String, required: true},
  ques5: {type:String, required: true},
  deptname: {type:String, required: true},
  date: {type:Date, required: true}
});
var quesset = module.exports = mongoose.model('quesset', quessetSchema);
