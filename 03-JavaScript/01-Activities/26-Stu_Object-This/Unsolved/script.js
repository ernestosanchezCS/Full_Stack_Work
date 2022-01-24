console.log(this);
//this refers to the global object which in a browser is the window 

function helloThis() {
  console.log('Inside this function, this is ' + this);
  //still refers to the global object window since 
  //the function is being executed from the global object
  //note if we had "use strict"; at the top on its own line this 
  //would prevent the binding to the global object
}

var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
    //refers to the child object which this function is called and we 
    //specifically want or are refering to the age parameter 
    //whithen that child object 
  },
};

var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
      //refers to the investor object through which this function is called and we 
      //specifically want or are refering to the initialInvestment parameter 
      //withen that investor object
    },
  },
};

//what is this?
//it is the object that is executing the current function

// Bonus
// Math.floor()
// The Math.floor() function returns the largest integer less than or equal to a given number. 
// Math.random()
// The Math.random() function returns a floating-point, pseudo-random number in the range 
// 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution 
// over that range
// Since random gives a random number betwen 0-1 and is floating point type 
// we can do our random number needed work and then use the floor function to give us an 
// integer value which can then be used to select a random index of an array 