/**
 * Created by n on 28.12.2016.
 */
var mbClient = require('./../messagebroker-client/messagebroker-client');
var client = mbClient(function (isReconnecting) {
});
var async = require('async');

var count = 0;

async.whilst(
    function () {
        return count < 10000000;
    },
    function (callback) {
        count++;

        client.sendRequest('/test1', null, function (err, response) {
            console.log(err);
            console.log(response);
            console.log(count);

            if (err) return callback(err);
            callback(null);
        });

    },
    function (err, n) {
        console.log('finished');
        console.log(err);
    }
);