/**
 * Created by n on 13.12.2016.
 */

var f1_i = 10;
var f2_i = 100;

var f1 = function(){

    this.i = f1_i++;

    this.printi = function(){

        console.log(this.i);

    };

};

var f2 = function(f1){

    this.f1 = f1;

    this.i = f2_i++;

    this.printi = function(){

        console.log(this.i);

    };

    this.printi_f1 = function(){

        this.f1.printi();

    };

};

var f3 = function(){

    this.f1 = new f1();
    this.f2 = f2;

    this.process = function(){

        var inst = new this.f2(this.f1);

        inst.printi();
        inst.printi_f1();

    };

};

var f4 = function(){

    var r1 = new f3();
    var r2 = new f3();

    r1.process();
    r1.process();
    r1.process();
    r1.process();

    r2.process();
    r2.process();
    r2.process();
    r2.process();

};

f4();