// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StoreSchema = new Schema({
    name: String,
    email: String,
    password: String,
    type: String
});

mongoose.model('logins', StoreSchema);