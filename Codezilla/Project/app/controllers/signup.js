var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

var logins = mongoose.model('logins');
var Stores = mongoose.model('Stores');

module.exports = function (app) {
  app.use('/', router);
};

function createSchemas(name) {
    var Any = new Schema({
        price: Number,
        itemID: mongoose.Types.ObjectId(ObjectId),
        itemName: String,
        stock: { type: Boolean, default: true }
    });
    return mongoose.model(name, Any);
}

router.post('/signup/customer', function (req, res) {

    var flag = true;

    var signupDetails = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.pass,
        type: "customer"
    }

    logins.count(signupDetails, function (err, c) {
        if (c != 0) {
            flag = false;
        }
    });

    if (flag) {
        var login = new logins(signupDetails);
        login.save(function (err) {
            if (err) {
                res.redirect('/ERROR');
            }
            else {
                res.redirect('/Success');
            }
        });
    }

});

router.post('/signup/retailer', function (req, res) {

    var flag = true;

    var signupDetails = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.pass,
        type: "retailer"
    }

    logins.count(signupDetails, function (err, c) {
        if (c != 0) {
            flag = false;
        }
    });

    if (flag) {
        var login = new logins(signupDetails);
        login.save(function (err) {
            if (err) {
                res.redirect('/ERROR');
            }
            else {
                logins.findOne({
                    email: req.body.email,
                    password: req.body.pass
                }).select("_id").exec(function (err, list) {
                    var flag = true;

                    var storeDetails = {
                        name: req.body.storename,
                        location_lat: parseFloat(req.body.lat),
                        location_long: parseFloat(req.body.long),
                        user_id: list._id
                    }

                    Stores.count(storeDetails, function (err, c) {
                        if (c != 0) {
                            flag = false;
                        }
                    });

                    if (flag) {
                        var store = new Stores(storeDetails);
                        store.save(function (err) {
                            if (err) {
                                res.redirect('/ERROR');
                            }
                            else {
                                res.redirect('/Success');
                            }
                        });
                    }
                    else {
                        res.redirect('/StoreExists');
                    }
                });

            }
        });
    }
});