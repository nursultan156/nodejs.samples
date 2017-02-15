/**
 * Created by mac on 15.02.17.
 */
var fs = require('fs');

var readFile = function(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, (err, data) => {

            if(err) reject('error');
            resolve('success');
        });

    });
};

// readFile('./../files/loops.docx').then(function(success){
//     console.log(success);
// },function(error){
//     console.log(error);
// });

var nullOfUndef = function(){
    return new Promise(function(resolve, reject){
        o.a = 'a';
        resolve('success');
    })
};

// nullOfUndef().then(function(success){
//     console.log(success);
// },function(error){
//     console.log(error);
// });

new Promise(function(resolve, reject){
    console.log('step1');
    // throw new Error('error1');
    resolve();
}).then(function(){
    console.log('step2');
    throw new Error('error2');
}).then(function(){
    console.log('step3');
}).catch(function(error){
    console.log(error);
});