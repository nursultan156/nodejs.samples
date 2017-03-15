/**
 * Created by vaio on 01.04.2016.
 */
var _ = require("underscore");


var underscore = function(){
    this.every = function(){
        var nonemptyarray = [1,2,3,4,5];
        var emptyarray = [];
        console.log(_.every(nonemptyarray, function(item){return item%2==0}));
        console.log(_.every(emptyarray, function(item){return item%2==0}));
    };
    this.some = function(){
        var nonemptyarray = [1,2,3,4,5];
        var emptyarray = [];
        console.log(_.some(nonemptyarray, function(item){return item%2==0}));
        console.log(_.some(emptyarray, function(item){return item%2==0}));
    };
    this.each = function(){
        var nonemptyarray = [1,2,3,4,5];
        var emptyarray = [];
        _.each(nonemptyarray, function(item){if(item%2==0) return false; console.log(item);});
        console.log("---");
        _.each(emptyarray, function(item){if(item%2==0) return false; console.log(item);});
        console.log('---');
        _.each(nonemptyarray, function(item, index, list){console.log(list);});
    };
    this.find = function(){
        var nonemptyarray = [1,2,3,4,5];
        var emptyarray = [];
        console.log(_.find(nonemptyarray, function(item){return item%2==0}));
        console.log(_.find(emptyarray, function(item){return item%2==0}));
    };
    this.extend = function(){
        var obj1 = {name:'obj1name',obj1:'obj1'};
        var obj2 = {name:'obj2name',obj2:'obj2'};
        var obj3 = {name:'obj3name',obj3:'obj3'};
        console.log(_.extend(obj1,obj2,obj3));
        console.log(obj1);
        console.log(obj2);
        console.log(obj3);
    };
    this.extendOwn = function(){
        var obj1 = {name:'obj1name',obj1:'obj1'};
        var obj2 = {name:'obj2name',obj2:'obj2'};
        var obj3 = {name:'obj3name',obj3:'obj3'};
        console.log(_.extendOwn(obj1,obj2,obj3));
        console.log(obj1);
        console.log(obj2);
        console.log(obj3);
    };
    this.filter = function(){
        var nonemptyarray = [1,null,3,4,5];
        var emptyarray = [];
        console.log(_.filter(nonemptyarray, function(item){ return item; }));
        console.log(_.filter(emptyarray, function(item){ return item; }));
    };
};

//run
var tester = new underscore();
tester.filter();