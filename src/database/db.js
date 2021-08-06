/* eslint-disable arrow-parens */
const mongoose = require('mongoose');
const { mongouri } = require('../constants');

mongoose.Promise = global.Promise;

mongoose.connect(mongouri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection
  .on('connected', () => console.log('mongo connect'))
  .on('error', err => console.log(err));

module.exports = mongoose;
