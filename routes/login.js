var express = require('express');
var path = require('path');
var router = express.Router();
var jwt = require('jsonwebtoken')

var User = require('../models/user');

router.post('/', function (req, res, next) {
  User.findOne({ username: req.body.username, password: req.body.password }, function (err, user) {
    if(err || !user) res.status(400).json(err);
    else if (user) {
      var token = jwt.sign(user, '../ssl/private.key', { expiresIn: 86400 });
    }
  });
});

module.exports = router;
