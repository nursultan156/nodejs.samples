/**
 * Created by vaio on 22.11.2016.
 */
var _ = require('underscore');

var primitive = function () {
    this.parseFloat = function () {
        var array = ['1,2', "2", null, "NULL", "hello"];
        _.each(array, function (item) {
            console.log(item ? parseFloat(item.toString().replace(/,/g, ".")) : "unparsable");
        });
    };
    this.Date_parse = function () {
        var array = ['2016-02-23 00:00:00', null, {}, 0];
        _.each(array, function (item) {
            console.log(new Date(Date.parse(item)));
        });
    };
};

//run
var tester = new primitive();
tester.Date_parse();