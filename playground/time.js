const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'year').subtract(9 , 'months');
// console.log(date.format('Do MMM, YYYY'));
var sometimeStamp = moment().valueOf();
console.log(sometimeStamp);
var date = moment();
console.log(date.format('h:mm a'));
