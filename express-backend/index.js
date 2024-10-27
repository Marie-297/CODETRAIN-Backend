const express = require('express');

const app = express();

const movieList = require('./Components/MovieList');


// GET request to get all movies
app.get('/', (req, res) => {
  res.send(movieList);
});

// GET request to get a single movie
app.get('/:id', (req, res) => {
  const movie = movieList.find(movieItem => movieItem.id == req.params.id);
  if (movie) {
    res.send(movie);
  } else {
    res.status(404).send('Movie not found');
  }
});

// POST request to create a new movie
app.post('/', (req, res) => {
  res.send("Create a new movie");
  console.log(req.body);
  
});

// PATCH request to update a movie
app.patch('/movies/:id', (req, res) => {
  res.send("Update/Edit an existing movie");
  console.log(req.body);
  
});

// DELETE request to delete a movie
app.delete('/movies/:id', (req, res) => {
  res.send("Delete a movie");
  console.log(req.body);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});