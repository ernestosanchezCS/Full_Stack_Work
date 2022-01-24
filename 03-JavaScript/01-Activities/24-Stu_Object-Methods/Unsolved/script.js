var chosenPet = "Spot";

var shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }
};

//Debug the code below 
function dogMessage() {
  console.log("Congrats! " + chosenPet + ", a great dog, is available for adoption!");
  shelter.apptMessage();
}

function catMessage() {
  console.log("Congrats! " + chosenPet + ", an awesome cat, is available for adoption!");
  shelter.apptMessage();
}

if (shelter.dogs.includes(chosenPet)) {
  dogMessage();
} else if (shelter.cats.includes(chosenPet)) {
  catMessage();
} else {
  console.log("It looks like the pet is not available.");
  console.log("Check out our featured dog, " + shelter.dogs[0] + ". or our featured cat, " + shelter.cats[1]);
}

console.log(Object.values(shelter));
//Bonus
//Object.values(shelter)
//will return an array of the items and types of items as are contained in shelter 
//so for this example it will return 
//[Array[4], Array[4], function dogMessage()]
//below is actual console output copy pasted from browser
// Array(3)
// 0: (4) ['Mackie', 'Bernice', 'Cookie Monster', 'Spot']
// 1: (4) ['Astrid', 'Lulu', 'Fluffy', 'Mouser']
// 2: ƒ ()