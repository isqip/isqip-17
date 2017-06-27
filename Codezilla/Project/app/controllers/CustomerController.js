var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

var logins = mongoose.model('logins');
var Stores = mongoose.model('Stores');
var items = mongoose.model('items');
var Schema = mongoose.Schema;
var async = require('async');

module.exports = function (app) {
    app.use('/', router);
};

function createSchemas(name) {
    var Any = new Schema({
        price: Number,
        itemID: Schema.Types.ObjectId,
        itemName: String,
        stock: { type: Boolean, default: true }
    });
    return mongoose.model(name, Any);
}

router.get('/chome', function (req, res) {
    var cid = global.cid;
    var cname = global.cname;
    items.find({}, function (err, list) {
        res.render('chome', {
            title: cname,
            message: "none",
            list: list
        });
    });

});



router.post('/chome/search', function (req, res) {

    Stores.find({}, function (err, list) {
        var lists = [];
        async.each(list,
            function (store, callback) {
                let lat1 = parseFloat(req.body.lat1);
                let lat2 = parseFloat(req.body.lat2);
                let long1 = parseFloat(req.body.long1);
                let long2 = parseFloat(req.body.long2);
                let lat = JSON.stringify(store.location_lat);
                let lats = parseFloat(lat);
                let long = JSON.stringify(store.location_long);
                let longs = parseFloat(long);
                let ITEMID = Schema.Types.ObjectId(req.body.item);
                if ((lats >= lat1) && (lats <= lat2) && (longs >= long1) && (longs <= long2)) {
                    try {
                        var storecoll = createSchemas(store.name.toLowerCase());
                    } catch (ex) {
                        var storecoll = mongoose.model(store.name.toLowerCase());
                    }
                    storecoll
                        .findOne({ itemID: ITEMID }, function (err, listss) {
                            lists.push(listss); 
                            callback(err);
                            console.log(lists);
                            console.log(listss);
                        });
                }
                else {
                    callback();
                }
            }, function (err) {
                if (err) {
                    res.send("error");
                }
                else {
                    console.log(lists);
                    res.render('searchresults', {
                        title: "Search results",
                        list: lists
                    });
                }
            });
        
    });

});