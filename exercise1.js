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