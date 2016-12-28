/**
 * Created by n on 28.12.2016.
 */
var mbCore = require("devir-mbserver");


var core = new mbCore.core();
core.registerConnector(mbCore.netConnector, 9009);
core.registerConnector(mbCore.netConnector, 9010);
core.registerConnector(mbCore.netConnector, 9011);