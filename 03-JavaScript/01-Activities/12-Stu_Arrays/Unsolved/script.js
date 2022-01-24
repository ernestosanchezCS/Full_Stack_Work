// WRITE YOUR CODE HERE
var names = ["Andre", "Karl", "Rashida", "Olivia"];
var copyofnames = [];

for (i = 0; i < names.length; i++) {
    copyofnames[i] = names[i];
}

console.log(names.length);

for (i = 0; i < names.length; i++) {
    console.log("Welcome to the class " + names[i]);
}

names[0] = "Francis";

// if (names[0] != "Andre"){
//     console.log(names[i] + " is in class");
// }

for (i = 0; i < names.length; i++) {
    if (copyofnames[i] !== names[i])
        console.log(names[i] + " is in class");
}

// Bonus
//
//it allows you to access the last element by using [(array.length-1)] 