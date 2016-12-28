/**
 * Created by n on 28.12.2016.
 */
var mbClient = require('./../messagebroker-client/messagebroker-client');

var client = mbClient(function (isReconnecting) {

    client.registerRoute('/test1', function (request) {

        var payload = {
            service: 'test1',
            payload: {
                payload: {
                    payload: {
                        payload: {
                            payload: {
                                payload: {}
                            }
                        }
                    }
                }
            },
            nestedService: null
        };

        client.sendRequest('/test2', null, function (err, response) {
            if (err) return request.sendResponse(err);
            payload.nestedService = response;
            request.sendResponse(payload);

        });


    });

    client.registerService();

});