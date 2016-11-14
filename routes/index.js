var express = require('express');
var router = express.Router();
var twitter = require('../lib/twitter1');
var facebook = require('../lib/facebook');
var twitterkeys = require('../lib/twitterkeys');
var mongo = require('../lib/mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  // twitter.tom((x) => {
  //   x.forEach(function(element) {
  //     console.log(element.text);
  //   }, this);
  // })
  mongo.getall_twitter_accounts((accounts) =>{
    console.log(accounts);
    res.render('index', { title: twitterkeys.consumerSecret, accounts: accounts });
  })
});

// router.get('adduser', function(req, res, next){
//   res.send(req);
// });

module.exports = router;
