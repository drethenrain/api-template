const express = require('express');
const api = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

app.use('/api', api);

module.exports = app;
