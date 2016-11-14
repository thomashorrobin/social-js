var MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/social';

function add(object, collection_name) {
    MongoClient.connect(url, function (err, db) {
        var collection = db.collection(collection_name);
        collection.insert(object);
        db.close();
    });
}

function getall(collection_name, callback) {
    MongoClient.connect(url, function (err, db) {
        let collection = db.collection(collection_name);
        collection.find({}).toArray(function(err, docs) {
            console.log(err);
            callback(docs);
        });
        db.close();
    });
}

exports.add_twitter_account = function(profile) {
    const obj = {
        id_str: profile.id_str,
        name: profile.name,
        screen_name: profile.screen_name
    }
    add(obj, 'twitter_accounts');
}

exports.add_facebook_account = function (profile){
    add(profile, 'facebook_accounts');
}

exports.add_twitter_snapshot  = function (snapshot){
    add(snapshot, 'twitter_snapshots');
}

exports.add_facebook_snapshot  = function (snapshot){
    add(snapshot, 'facebook_snapshots');
}

exports.getall_twitter_accounts = function(callback) {
    getall('twitter_accounts', callback);
}

exports.getall_facebook_accounts = function (callback){
    getall('facebook_accounts', callback);
}

exports.getall_twitter_snapshots  = function (callback){
    getall('twitter_snapshots', callback);
}

exports.getall_facebook_snapshots  = function (callback){
    getall('facebook_snapshots', callback);
}
