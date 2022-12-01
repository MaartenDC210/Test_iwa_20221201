const readLine = require("readline-sync");

const movies = [
  {
    id: "17e6a1bc-70ee-11ed-a1eb-0242ac120002",
    name: "Pulp Fiction",
    year: "1994",
    genre: ["Crime", "Drama"],
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    id: "ebbea8f0-36d7-482a-b8bc-42182dd1bedd",
    name: "Taxidermia",
    year: "2006",
    genre: ["Comedy", "Drama", "Horror"],
    description:
      "Three generations of men, including a pervert that constantly seeks for new kinds of satisfaction, an obese speed eater and a passionate embalmer.",
  },
  {
    id: "118b4b8c-4573-4193-855b-9f0bc3330d45",
    name: "Naked Lunch",
    year: "1991",
    genre: ["Drama"],
    description:
      "After developing an addiction to the substance he uses to kill bugs, an exterminator accidentally kills his wife, and becomes involved in a secret government plot being orchestrated by giant bugs in a port town in North Africa.",
  },
  {
    id: "e0144323-d34f-407f-a65a-d54e83b27896",
    name: "There Will Be Blood",
    year: "2007",
    genre: ["Drama"],
    description:
      "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
  },
];

console.log("Welcome to MovIt!");

let movieTitles = [];
let selectedMovieId;

function showMovieTitles(movies){
  movies.forEach((movie, index) => {
    movieTitles.push({number: index + 1, name: movie.name});
  });
}

function getMovieById(id){
  return movies.find( m => m.id === id);
}

showMovieTitles(movies);
movieTitles.forEach(movie => console.log(movie));

while (true) {
  let selectedMovieNumber = readLine.questionInt("Select the number of the movie you want to see: ")
  if (selectedMovieNumber <= movies.length && selectedMovieNumber > 0){
    selectedMovieId = movies[selectedMovieNumber - 1].id
    break;
  }
}


