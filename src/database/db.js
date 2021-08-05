/* eslint-disable arrow-parens */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/apitemplate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection
  .on('connected', () => console.log('mongo connect'))
  .on('error', err => console.log(err));

module.exports = mongoose;
