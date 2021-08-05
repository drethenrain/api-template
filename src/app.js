const express = require('express');
const users = require('./routes/user');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

app.use('/api', users);

module.exports = app;
