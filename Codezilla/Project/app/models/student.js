// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StudentSchema = new Schema({
    name: String,
    rollNo: Number,
    class: String,
    DOB: String,
    classLeader: Boolean,
    delete: {type: Boolean, default: false}
});

mongoose.model('Student', StudentSchema);