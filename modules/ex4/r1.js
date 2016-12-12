/**
 * Created by n on 12.12.2016.
 */
var c1 = require('./c1');
var r1 = function(){
    this.c1 = c1.newInst();
    this.connection = Math.random();
    console.log('r1.js - ' + this.connection + ', c1.js - ' + this.c1.connection);
};

module.exports.newInst = function(){
    return new r1();
};