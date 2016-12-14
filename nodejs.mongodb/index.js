/**
 * Created by n on 13.12.2016.
 */
var repository = require('nodejs.mongodb').repository;

var repository_192_168_66_13 = repository.new('mongodb://192.168.66.13:27017/t1', {server: {socketOptions: {socketTimeoutMS: 1000 * 600}}});

var payload = {
    collectionName: 'c11',
    document: {
        a:function(){
            var c = 1000;
        },
        b:4
    }
};

repository_192_168_66_13.createOne(payload, function(err, res){
    console.log(err);
    console.log(res);
});