
let moment = require('moment');
const chalk = require('chalk');
const log = console.log;

let dst = moment().isDST();
if (dst === true){
  dst = 'is';
} else {
  dst = "ain't";
}

let ly = moment().isLeapYear();
if (ly === true){
  ly = "most definitely is";
} else {
  ly = "most definitely is not";
}

let start = moment().startOf('day')
let result = moment().diff(moment(start));

let firstLine = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
let secondLine = moment().format('DDDo')
let thirdLine = moment.duration(result).as('seconds');
let fourthLine = dst;
let fifthLine = ly;

log("It is " + chalk.blue(`${firstLine}`) + ".")
log("It is the " + chalk.magenta(`${secondLine}`) + " day of the year.")
log("It is " + chalk.yellow(`${thirdLine}`) + " seconds into the day.")
log("It " + chalk.green(`${fourthLine}`) + " currently Daylight Savings.")
log("It " + chalk.red(`${fifthLine}`) + " a leap year.")
