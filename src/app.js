const express = require('express');
const morgan = require('morgan');
const api = require('./routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api', api);

app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

module.exports = app;
