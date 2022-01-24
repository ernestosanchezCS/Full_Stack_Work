// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25); //false
var expression2 = (x > 50); //false
console.log(expression1, expression2);
// Write Your JavaScript Code Here
if (expression1 && expression2) {
    console.log("True ✅ True ✅");
} else if (expression1 != expression2) {
    if (expression1) {
        console.log("True ✅ False ❌");
    } else {
        console.log("False ❌ True ✅");
    }
} else console.log("False ❌ False ❌");

// The switch statement evaluates an expression, 
// matching the expression's value to a case clause, 
// and executes statements associated with that case,
//  as well as statements in cases that follow the matching case.
// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }