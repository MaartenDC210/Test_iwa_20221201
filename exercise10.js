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
let selectedMovie;

function showMovieTitles(movies){
  movies.forEach((movie, index) => {
    movieTitles.push({number: index + 1, name: movie.name});
  });
}

function getMovieById(id){
  return movies.find( m => m.id === id);
}

function printMovieDetails(movie){
  console.log(movie.name)
  console.log(`${movie.year} - ${movie.genre.join(', ')}`);
  console.log(movie.description);
}

function selectMovie() {
  while (true) {
  let selectedMovieNumber = readLine.questionInt("Select the number of the movie you want to see: ")
  if (selectedMovieNumber <= movies.length && selectedMovieNumber > 0){
    selectedMovieId = movies[selectedMovieNumber - 1].id
    break;
    }
  }
  selectedMovie = getMovieById(selectedMovieId);
  printMovieDetails(selectedMovie);
}


showMovieTitles(movies);

movieTitles.forEach(movie => console.log(movie));

selectMovie();

while(true){
  const selectOtherMovie = readLine.keyInYN("Do you want to select an other movie");
  if (selectOtherMovie) selectMovie();
  else{
    printMovieDetails(selectedMovie);
    break;
  }
}

const amountOfTickets = readLine.questionInt("How many tickets do you want to buy? ");
let amountOfChildren = 0;
while(true){
  amountOfChildren = readLine.questionInt("How many children are going to watch the movie? ")
  if( amountOfChildren <= amountOfTickets)
    break;
  else console.log("There are more children than tickets!");
}

let visitors = []
for (let i = 0 ; i < amountOfTickets - amountOfChildren; i++) {
  let visitorName = readLine.question(`Give the name of adult ${i + 1}:`);
  visitors.push({name: visitorName, isChild: false});
}

for (let i = 0 ; i < amountOfChildren; i++) {
  let visitorName = readLine.question(`Give the name of child ${i + 1}:`);
  visitors.push({name: visitorName, isChild: true});
}

const visitorsWithPrice = [];
visitors.forEach( (visitor) => {
  visitorsWithPrice.push({...visitor, price: visitor.isChild ? 7 : 11});
})

let totalAmount = 0;
function calculateTotalPrice(visitorsWithPrice){
  visitorsWithPrice.forEach( (v) => {totalAmount += v.price});
}
calculateTotalPrice(visitorsWithPrice)
console.log(`The total price is ${totalAmount}$.`);

