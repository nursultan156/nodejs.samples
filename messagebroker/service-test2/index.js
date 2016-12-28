/**
 * Created by n on 28.12.2016.
 */
var mbClient = require('./../messagebroker-client/messagebroker-client');

var client = mbClient(function (isReconnecting) {

    client.registerRoute('/test2', function(request){
        var payload = {
            service: 'test2'
        };
        request.sendResponse(payload);
    });

    client.registerService();

});