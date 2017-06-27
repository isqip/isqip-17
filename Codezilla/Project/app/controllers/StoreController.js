var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Stores = mongoose.model('Stores');
var Items = mongoose.model('items');

function createSchemas(name) {
    var Any = new Schema({
        price: Number,
        itemID: Schema.Types.ObjectId,
        itemName: String,
        stock: { type: Boolean, default: true }
    });
    return mongoose.model(name, Any);
}

module.exports = function (app) {
    app.use('/', router);
};

router.post('/store/add/item', function (req, res) {

    var itemDetails = {
        price: req.body.price,
        itemID: Schema.Types.ObjectId(req.body.itemID),
        itemName: req.body.itemName,
        stock: true
    };

    try {
        console.log(global.storeId);
        console.log(global.storeName)
        var store = createSchemas(global.storeName);
    }
    catch (ex) {
        //console.log(global.storeId);
        //var store = createSchemas(global.storeName);
    }

    var stores = mongoose.model(global.storeName);

    var Store = new stores(itemDetails);

    Store.save(function (err) {
        if (err) {
            res.send('Error');
        }
        else {
            res.send("Success");
        }
    });

});

router.get('/store/add/item', function (req, res) {

    Items.find({permission:true}, function (err, list) {
        if (err) {
            res.render('addItem', {
                title: "Add Item",
                message: "Error",
                list: [],
            });
        }
        else {
            res.render('addItem', {
                title: "Add Item",
                message: "none",
                list: list,
            });
        }
    });

});

router.get('/store', function (req, res) {

    var rid = global.rid;
    var rName = global.Name;
    Stores.findOne({
        user_id: rid
    }).select("_id name").exec(function (err, list) {
        global.storeId = list._id;
        global.storeName = list.name;
        try {
            var store = mongoose.model(global.storeName);
        }
        catch (ex) {
            var store = createSchemas(global.storeName);
        }
        store.find({}, function (err, lists) {
            if (err) {
                res.render('store', {
                    title: list.name,
                    message: "Error",
                    list: []
                });
            }
            else {
                console.log(lists);
                res.render('store', {
                    title: list.name,
                    message: "Success",
                    list: lists
                });
            }
        });
    }); 

});

router.post('/store/suggest/item', function (req, res) {

    var ItemDetails = {
        name: req.body.name,
        permission: false
    }

    var items = new Items(ItemDetails);

    items.save(function (err) {
        if (err) {
            res.send("Error");
        }
        else {
            res.send("Success");
        }
    });

});

router.get('/:mess', function (req, res) {
    res.render("index", {
        title: "Trevour",
        message: req.params.mess
    });
});