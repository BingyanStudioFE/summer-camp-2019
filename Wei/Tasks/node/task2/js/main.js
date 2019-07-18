'use strict';
//require('./');

console.log('Are you administrator or member?(A/M)');
var readlineSync = require('readline-sync');

// Wait for user's response.

var userName = readlineSync.question('May I have your name? ');
if(userName==='A'){
    console.log('yes');
}