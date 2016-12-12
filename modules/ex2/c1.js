/**
 * Created by n on 12.12.2016.
 */

var c1 = function(){
    this.connection = Math.random();
    console.log('c1.js - ' + this.connection);
};

module.exports = new c1();