/**
 * Created by n on 16.12.2016.
 */
var MongoClient = require('mongodb').MongoClient;
var GridFSBucket = require('mongodb').GridFSBucket;
var ObjectID = require('mongodb').ObjectID;
var async = require('async');
var path = require('path');
var fs = require('fs');
var repository = require('nodejs.mongodb').repository;

var repository_192_168_66_13 = repository.new('mongodb://192.168.66.13:27017/t1', {server: {socketOptions: {socketTimeoutMS: 1000 * 600}}});

var _url = 'mongodb://192.168.66.13:27017/t1';
var _db = null;

async.series([
        function (callback) {
            MongoClient.connect(_url, null, function (err, db) {
                if (err) return callback(err);
                _db = db;
                callback(null);
            });
        },
        function (callback) {

            var filename = 'bin.dat';
            var options = {
                metadata: {
                    fileName: 'Текстовый документ66.txt',
                    fileSize: '5mb',
                    uploadDate: new Date(),
                    userId: new ObjectID()
                },
                contentType: 'any existing/non-existing type',
                aliases: ['это мой алиас', 'хэштэг решетка']
            };


            var bucket = new GridFSBucket(_db);
            var uploadStream = bucket.openUploadStream(filename, options);


            var filepath = path.join(__dirname, '../files/Новый текстовый документ.txt');
            var readStream = fs.createReadStream(filepath);

            console.log(uploadStream.id);

            readStream.pipe(uploadStream).on('error', function (error) {
                return callback(error);
            }).on('finish', function () {
                return callback(null);
            });
        },
        function (callback) {

            //var payload = {
            //    collectionName: 'fs.files',
            //    query: {
            //        'metadata.fileName': 'Текстовый документ66.txt'
            //    },
            //    update:{
            //        $set: {
            //            'metadata.fileName': 'new filenameeeeeeeeeeeeeeeeee'
            //        }
            //    },
            //    cursorOptions: {
            //        toArray: true
            //    }
            //};


            //repository_192_168_66_13.readMany(payload, function(err, res){
            //    console.log(err);
            //    console.log(res);
            //    callback(null);
            //});


            //var bucket = new GridFSBucket(_db);
            //bucket.find(payload.query, null).toArray(function(err, res){
            //    console.log(err);
            //    console.log(res);
            //    callback(null);
            //});


            //repository_192_168_66_13.updateOne(payload, function(err,res){
            //    console.log(err);
            //    console.log(res);
            //    callback(null);
            //});

            //console.log(fs.existsSync(path.join(__dirname, '../files/Новый текстовый документ.txt')));


            var bucket = new GridFSBucket(_db);
            var downloadStream = bucket.openDownloadStream('5852f3df4782b7065c6745df', null);

            var filepath = path.join(__dirname, '../files/Новый текстовый документ3.txt');
            var writeStream = fs.createWriteStream(filepath);

            //downloadStream.pipe(writeStream).on('error', function (error) {
            //    return callback(error);
            //}).on('finish', function () {
            //    return callback(null);
            //});

            downloadStream.on('error', function(error) {
                console.log(error);
            });

            var gotData = 0;
            var str = '';
            downloadStream.on('data', function(data) {
                ++gotData;
                str += data.toString('utf8');
            });

            downloadStream.on('end', function() {
                console.log(gotData);
                console.log(str);
            });

            //callback(null);

        }
    ],
    function (err, res) {
        console.log(err);
        console.log(res);
    });