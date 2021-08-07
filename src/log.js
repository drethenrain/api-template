const { green, red, yellow, magenta } = require('chalk');

class Log {
  static sucess(message) {
    return console.log(green(message));
  }

  static warn(warn) {
    return console.log(yellow(warn));
  }

  static error(err) {
    return console.log(red(err));
  }

  static misc(message) {
    return console.log(magenta(message));
  }
}

module.exports = Log;
