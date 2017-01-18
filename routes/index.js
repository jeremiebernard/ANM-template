var express = require('express');
var router = express.Router();

var posts = require('./posts');

router.get('/', function(req, res, next) {
  res.send('api works!');
});

router.use('/posts', posts);

module.exports = router;
