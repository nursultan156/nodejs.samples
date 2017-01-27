/**
 * Created by mac on 27.01.17.
 */

var PrimitiveValidator = require('nodejs.validator').primitive;

console.log(PrimitiveValidator.isStrictNumber(0));
console.log(PrimitiveValidator.isStrictNumber("123"));
console.log(PrimitiveValidator.isStrictNumber("asd"));