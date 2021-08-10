const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const api = require('./routes');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/api', api);

module.exports = app;
