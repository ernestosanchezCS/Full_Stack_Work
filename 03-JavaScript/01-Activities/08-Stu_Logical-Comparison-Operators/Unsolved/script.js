var a = "50";
var b = 50;
var c = 100;
var d = c % b; // 0
var e = c / 2; // e is 50

var expression1 = (b === e); // true
var expression2 = (e < d); // false

// Use comparison operators so all expressions below log to the console as true
console.log(a == b);
console.log(b === e);
console.log(c > b);
console.log(d === 0);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 || expression2);
console.log(!expression1 || !expression2);

// = assigns 
// == checks for equality
// ===checks for strick equality type and value

//Bonus
//The global NaN property is a value representing Not-A-Number.
// NaN is a property of the global object. In other words, it is a variable in global scope.

// The initial value of NaN is Not-A-Number — the same as the value of Number.NaN. In modern browsers, NaN is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it. It is rather rare to use NaN in a program.

// There are five different types of operations that return NaN:

// Number cannot be parsed (e.g. parseInt("blabla") or Number(undefined))
// Math operation where the result is not a real number (e.g. Math.sqrt(-1))
// Operand of an argument is NaN (e.g. 7 ** NaN)
// Indeterminate form (e.g. 0 * Infinity, or undefined + undefined)
// Any operation that involves a string and is not an addition operation (e.g. "foo" / 3)
console.log(typeof NaN);
// returns type number even tho NaN is a value representing Not-A-Number lol