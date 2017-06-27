var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

var logins = mongoose.model('logins');

module.exports = function (app) {
    app.use('/', router);
};

router.post('/login', function (req, res) {
    logins.findOne({
        email: req.body.email,
        password: req.body.pass
    }).select("_id name type").exec(function (err, list) {
        if (list.type == "retailer") {
            global.rid = list._id;
            global.rname = list.name;
            res.redirect('/store');
        }
        else {
            if (list.type == "customer") {
                global.cid = list._id;
                global.cname = list.name;
                res.redirect('/chome');
            }
        }
    });
});