var oauth = require('oauth');
var https = require('https');
var twitterkeys = require('../lib/twitterkeys');
var Twitter = require('twitter');

var twitter1 = {
    saveProfile: saveProfile,
    getProfile: getProfile,
    tom: listTomsStatuses
}

function getProfile(id, callback) {
    const params = {screen_name: id};
    var c = client();
    c.get('users/show', params, function(error, profile_data, response) {
        if (!error) {
            callback(profile_data);
        }
    });
}

function client() {
//   return new oauth.OAuth(
//     "https://twitter.com/oauth/request_token", "https://twitter.com/oauth/access_token", 
//     twitterkeys.consumerKey, twitterkeys.consumerSecret, "1.0A", null, "HMAC-SHA1");   
    return new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });
}

function listTomsStatuses(callback) {
    const params = {screen_name: 'horrobinnz'};
    var c = client();
    c.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            callback(tweets);
        }
    });
}

function saveProfile(profile) {
    
}

module.exports = twitter1;
