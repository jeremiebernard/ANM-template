var express = require('express');
var path = require('path');
var router = express.Router();

var User = require('../models/user');

router.get('/', function (req, res, next) {
	User.find({}, function (err, users) {
		if (err) res.status(400).json(err);
		else res.status(200).json(users);
	});
});

module.exports = router;
