var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DiseaseSchema = new Schema({
  diseaseName: String,
  fatal: Boolean,
  symptomIds: [ {type: Schema.ObjectId, ref: 'Symptom'} ]
});

mongoose.model('Disease', DiseaseSchema);

