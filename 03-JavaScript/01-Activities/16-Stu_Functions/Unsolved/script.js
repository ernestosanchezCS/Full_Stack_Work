// Write Your Code Below
//arguments are passed to the function 
//function then creates parameters from given arguments 
//can be named differently have to be same type or typecasted

var number1 = 23;
var string1 = "23";

function declareHello(_value1, _value2) {

    if (_value1 === _value2) {
        console.log("They are equal in type and value");
    }
    else if (_value1 == _value2) {
        console.log("They are equal in value");
    }
    else {
        console.log("The values are not equal");
    }
}
declareHello(number1, string1);

//bonus
//What is hoisting?
//Hoisting is JavaScript's default behavior of moving all declarations 
//to the top of the current scope (to the top of the current script or the current function).
//Basically we can use functions before we right them because Javascript will 
//automatically move them to the top of the script when compiled and executed

