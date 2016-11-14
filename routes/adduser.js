var express = require('express');
var router = express.Router();
var twitter = require('../lib/twitter1.js');
var mongodb = require('../lib/mongodb.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  twitter.getProfile(req.query.id, (profile_data) => {
    mongodb.add_twitter_account(profile_data);
    res.send(profile_data);
  })
});

module.exports = router;
