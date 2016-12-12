/**
 * Created by n on 12.12.2016.
 */

var f1 = function(){

    this.variable1 = 1;

};

module.exports = {
    a:1
};

module.exports.variant1 = function(){
    return new f1();
};

module.exports.variant2 = new f1();

