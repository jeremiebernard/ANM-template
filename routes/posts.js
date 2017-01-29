var express = require('express');
var path = require('path');
var router = express.Router();

var __data = path.join(__dirname, '../data');

router.get('/', function(req, res, next) {
  res.sendFile(__data + '/posts.json');
});

module.exports = router;
