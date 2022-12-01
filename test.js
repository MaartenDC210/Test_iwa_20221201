const persons = [ 
  { name: "Bart", age: 34 }, 
  { name: "Tom", age: 26 }, 
  { name: "Olivia", age: 47 }, 
];


function getOldestName(persons) {
  const sortedPersons = persons.sort((a,b) => a.age - b.age);

  return sortedPersons[sortedPersons.length - 1].name

}

console.log(getOldestName(persons));

const numbers = [ 
  2, 457, 76, 54, 4, 37, 486, 64846, 46, 574, 57457, 34, 23, 7, 686, 24, 466, 204, 467, 67 
];

function getAmountOfEvenNumbers(numbers){
  let amountOfEvenNumbers = 0;
  numbers.forEach(number => {
    if(number%2 === 0)
      amountOfEvenNumbers++;
  });
  return amountOfEvenNumbers;
}

console.log(getAmountOfEvenNumbers(numbers));


