/**
 * Created by n on 28.12.2016.
 */
var clientFactory = require("devir-mbclient");

module.exports = function(onConnection, host, port) {
    return new clientFactory.core(clientFactory.netConnector, host?host:'localhost', port?port:'9009', onConnection);
};