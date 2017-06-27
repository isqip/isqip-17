var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: String,
  rollNo: Number,
  className: String,
  dOb: Number,
  Units: Number,
  classLeader: Boolean,
  delete: {type: Boolean, default: false}
});

mongoose.model('Student', StudentSchema);