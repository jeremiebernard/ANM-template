var express = require('express');
var path = require('path');
var router = express.Router();

var User = require('../models/user');

router.post('/', function (req, res, next) {
  let user = new User(req.body);
  user.save(function (err, user) {
    if (err) res.status(400).json(err);
    else if (user) res.status(200).json(user);
  });
});

module.exports = router;
