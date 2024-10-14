const express = require('express');

const app = express();

let movieList = [
  {
    id: 1,
    title: "Inception",
    description: "A skilled thief enters people's dreams to steal secrets and is offered a chance to erase his past crimes if he can implant an idea into someone's mind.",
    image: "https://via.placeholder.com/150",
    rating: 8.8
  },
  {
    id: 2,
    title: "The Dark Knight",
    description: "Batman faces the Joker, a criminal mastermind bent on creating chaos in Gotham City.",
    image: "https://via.placeholder.com/150",
    rating: 9.0
  },
  {
    id: 3,
    title: "Interstellar",
    description: "A group of explorers travels through a wormhole in search of a new habitable planet as Earth faces a global food crisis.",
    image: "https://via.placeholder.com/150",
    rating: 8.6
  },
  {
    id: 4,
    title: "The Matrix",
    description: "A computer hacker learns the truth about reality and joins a rebellion against the machines controlling it.",
    image: "https://via.placeholder.com/150",
    rating: 8.7
  },
  {
    id: 5,
    title: "Pulp Fiction",
    description: "The lives of several criminals in Los Angeles intertwine through a non-linear narrative in this cult classic.",
    image: "https://via.placeholder.com/150",
    rating: 8.9
  },
  {
    id: 6,
    title: "Forrest Gump",
    description: "A simple man with a kind heart unwittingly influences major events in American history, all while searching for his true love.",
    image: "https://via.placeholder.com/150",
    rating: 8.8
  },
  {
    id: 7,
    title: "The Shawshank Redemption",
    description: "A man wrongly convicted of murder forms a lifelong friendship with a fellow inmate and struggles to maintain hope in prison.",
    image: "https://via.placeholder.com/150",
    rating: 9.3
  },
  {
    id: 8,
    title: "Fight Club",
    description: "A depressed man suffering from insomnia forms an underground fight club as a form of therapy, but things quickly spiral out of control.",
    image: "https://via.placeholder.com/150",
    rating: 8.8
  },
  {
    id: 9,
    title: "The Godfather",
    description: "The aging patriarch of a powerful crime family hands control of his empire to his reluctant son in this iconic mafia saga.",
    image: "https://via.placeholder.com/150",
    rating: 9.2
  },
  {
    id: 10,
    title: "Gladiator",
    description: "A betrayed Roman general seeks revenge against the corrupt emperor who murdered his family and sent him into slavery.",
    image: "https://via.placeholder.com/150",
    rating: 8.5
  }
];

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});