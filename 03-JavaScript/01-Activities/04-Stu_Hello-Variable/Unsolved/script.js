// Write Your JavaScript Code Here

var personName = "Ernesto";
var pets = 1;
var funFact = "I was born in Guadalajara, Mexico.";

// To access a value stored in a variable, use the variable's name
console.log("My name is " + personName);
console.log("I have " + pets + " pet.");
console.log("Fun fact: " + funFact);

// Enter partner info here
personName = "Jaskamalpreet";
pets = 0;
funFact = "I am Ernesto's partner.";

var pluralOrSingular;

if (pets > 1 || pets == 0) {
    pluralOrSingular = " pets.";
}
else pluralOrSingular = " pet.";

console.log("My name is " + personName);
console.log("I have " + pets + pluralOrSingular);
console.log("Fun fact: " + funFact);
