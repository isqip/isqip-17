// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

require('mongoose-double')(mongoose);

var StoreSchema = new Schema({
    name: String,
    location_lat: Schema.Types.Double,
    location_long: Schema.Types.Double,
    user_id: Schema.Types.ObjectId
});

mongoose.model('Stores', StoreSchema);