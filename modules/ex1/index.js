/**
 * Created by n on 12.12.2016.
 */
var m1 = require('./module1');
var m1_v1_1 = require('./module1').variant1;
//var m1_v1_2 = require('./module1').variant1();
var m1_v2_1 = require('./module1').variant2;
//var m1_v2_2 = require('./module1').variant2();

console.log(m1);
console.log(m1_v1_1);
//console.log(m1_v1_2);
console.log(m1_v2_1);
//console.log(m1_v2_2);
console.log();