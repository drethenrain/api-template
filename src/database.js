const mongoose = require('mongoose');
const log = require('./log');

const { mongouri } = require('./constants');

function connect() {
  mongoose.Promise = global.Promise;

  mongoose.connect(mongouri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  mongoose.connection
    .on('connected', () => log.sucess('[DATABASE] MongoDB Connected'))
    .on('error', err => log.error(err));
}

module.exports = { connect };
