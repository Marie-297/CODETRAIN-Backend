const express = require('express');
const morgan = require('morgan');
const booksRoute = require('./routes/booksRoute');

const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/v1/books', booksRoute);

module.exports = app;