//WRITE YOUR CODE BELOW

var customerOrder = {
    drinkName: "Coke",
    sugarAmount: "55 grams",
    orderReady: false
}

console.log(customerOrder.drinkName);
console.log(customerOrder.sugarAmount);

if (customerOrder.orderReady) {
    console.log("Ready for pick-up");
} else {
    console.log("Still in order queue");
}

//Bonus
//for...in statement ?
//cycles through a array index 
//like when we make a for loop with i<array.length 
//to go through an array