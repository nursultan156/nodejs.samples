/**
 * Created by mac on 27.01.17.
 */

var PrimitiveTransformator = require('nodejs.transformator').primitive;

console.log(PrimitiveTransformator.roundNumber('123'));
console.log(PrimitiveTransformator.roundNumber(123.123));
console.log(PrimitiveTransformator.roundNumber(123.123456,4));