var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
//push() pushes item onto end of array unshift pushes in the beginning
constellations.unshift("Canis Major");
//console.log(constellations[0]);


//splice can add and/or remove 
//first in splice say where to begin, then how many to remove,
//then what to add if anything at the start point you gave
//can take multiple imputs if u want to add a lot of items 
planets.splice(5, 1);
console.log(planets);

var galaxy = constellations.concat(planets);
console.log(galaxy);

var newString = star.toUpperCase();
console.log(newString);


//Bonus
console.log(typeof planets);
// we get type object
// expected since when arrays are made they become objects
