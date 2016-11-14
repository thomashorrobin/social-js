var express = require('express');
var router = express.Router();
var twitter = require('../lib/twitter1');
var facebook = require('../lib/facebook');
var twitterkeys = require('../lib/twitterkeys');

/* GET home page. */
router.get('/', function(req, res, next) {
  twitter.tom((x) => {
    x.forEach(function(element) {
      console.log(element.text);
    }, this);
  })
  console.log(req);
  res.render('index', { title: twitterkeys.consumerSecret });
});

// router.get('adduser', function(req, res, next){
//   res.send(req);
// });

module.exports = router;
