#!/usr/bin/env node

var myArgs = process.argv.slice(2);
console.log('given command line args: ', myArgs);
var sum = 0;

function getNumber(number, defaultNumber) {
    return isNaN(parseInt(number)) ? defaultNumber : parseInt(number, 10);
}

myArgs.forEach(function(data, idx, arr){
    sum += getNumber(data, 0);
});

console.log("sum of args: ", sum);
