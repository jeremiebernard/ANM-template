var express = require('express');
var path = require('path');
var router = express.Router();

var User = require('../models/user');

router.get('/', function (req, res, next) {
	User.find({}, function (err, users) {
		if (err) res.status(400).send(err);
		else res.status(200).send(users);
	});
});

module.exports = router;
