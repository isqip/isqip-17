var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SymptomSchema = new Schema({
  symptomName: String, 
   });
mongoose.model('Symptom', SymptomSchema);