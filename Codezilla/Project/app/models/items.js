// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name: String,
    permission: { type: Boolean, default: true }
});

mongoose.model('items', ItemSchema);