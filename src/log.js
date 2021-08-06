/* eslint-disable class-methods-use-this */
const { green, red, yellow, magenta } = require('chalk');

class Log {
  sucess(message) {
    console.log(green(message));
  }

  warn(warn) {
    console.log(yellow(`[WARN] ${warn}`));
  }

  error(err) {
    console.log(red(err));
  }

  misc(message) {
    console.log(magenta(message));
  }
}

module.exports = new Log();
