const express = require('express');
const morgan = require('morgan');
const booksRoute = require('./routes/booksRoute');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1', booksRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})