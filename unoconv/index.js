/**
 * Created by mac on 18.01.17.
 */
var fs = require('fs');
var unoconv = require('unoconv2');

unoconv.convert('../files/document.doc', 'pdf', function (err, result) {
    // result is returned as a Buffer
    fs.writeFile('../files/converted.pdf', result);
});