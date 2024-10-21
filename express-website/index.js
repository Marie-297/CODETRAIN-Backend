const express = require('express');

const app = express();

const  path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(`${__dirname}/public`));

app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});
app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'service.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


