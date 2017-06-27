var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res) {
    res.render("index", {
        title: "Trevour",
        message: "none"
    });
});