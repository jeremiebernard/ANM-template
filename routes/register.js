var express = require('express');
var path = require('path');
var router = express.Router();

var User = require('../models/user');

router.post('/', function (req, res, next) {
  let user = new User(req.body);
  console.log(user);
  user.save(function (err, user) {
    if (err) res.status(400).send(err);
    else res.status(200).send(user);
  });
});

module.exports = router;
