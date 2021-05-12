'use strict';
// activates strict mode for all scripts
// you can also activate strict mode for a specifc code or block
// makes it easier to introduce bugs in our code
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive!');

// Using strict mode it shows us why it is our output isn't occuring

// const interface = 'Audio';
// const private = 534;
// const if = 23;

// Functions //

// // A function can hold one or more complete lines of code that you can reuse over and over again

// function logger() {
//     console.log('My name is Marcus');
// }

// // We needed to reuse this logger later in our code

// logger(); // My name is Marcus
// logger(); // My name is Marcus
// logger(); // My name is Marcus

// Now we can invoke/run/call the function via its name followed by parens
// Usually when we write functions we pass data into a function and a function can return data which then we can use for something else in our app
// Functions are like machines
// Likened to a food processor you put something in the function it does something to the data and returns it into a different form

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// fruitProcessor(4, 3); // 4 3

// Parameters are like variables that are specifc only to this function that are defined when you call the function
// These represent the input data

// const appleJuice = fruitProcessor(6, 0);
// console.log(appleJuice);

// The fruitProccessor function is taking in 2 params of numbers then logging those to the console: 4, 3 then 6, 4. 

// Next that function created a scoped variable of juice the stores a string template literal that invokes the apples and oranges parameters and then we return that variable juice from the function call.

// The const applejuice is the whole function of fruitProccessor with numbers being used as arguments for the original fruitProcessor function.

// Lastly we log the appleJuice variable to the console which outputs the returned value of juice based on the arguments inputed.

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Not all functions need to return anything or have parameters
// DRY Don't Repeat Yourself
// Use functions to do so

// Function Declarations VS Expressions //

// function calcAge1(birthYear) {
//     return 2021 - birthYear;
// }
// Function Declaration


// In this calcAge1 function we are gonna expect a birthYear (number) then in that code block create a variable age and set it to equal the current year minus that parameter birthYear.
// Lastly we return the result of age after that expression

// const age1 = calcAge1(1990);
// console.log(age1); //31

// Arguments and Parameters are not the same
// Parameters are the "placeholder" for the variable we will input later
// Arguments are the actual "input" that is ran in the function.

// const calcAge2 = function (birthYear) {
//     return 2302 - birthYear;
// }
// Function Expression

// It has a value
// We use that value and store it within calcAge2

// const age2 = calcAge2(1990);
// console.log(age1, age2)

// Both of these functions work in the same way
// A Function is not a type - it is a value - it can be stored in a variable
// What is the difference?
// You can call a function declaration before it is defined in the code.
// You cannot call an expression before it is initialized

// The fact that a function expression is stored in a variable means you can't call a function before it runs
// A declaration is like stating how a function works and using it as a tool. Hence you can always use your tool as long as it is defined.

// Arrow Functions //

// const calcAge2 = function (birthYear) {
//     return 2021 - birthYear;
// }

// const calcAge3 = birthYear => 2021 - birthYear;

// It still is a function expression
// Easier and faster to write
// Has an implicit return
// Less code
// Good for one liner functions

// const age3 = calcAge3(1988);
// console.log(age3);

// When you have only one param and one line of code you don't need parens and curly brackets

// const yearsUntilRetired = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetired(1991, 'Johnny'));
// console.log(yearsUntilRetired(1967, 'Janet'));

// Here we have a function expression stored in yearsUntilRetired that takes in 2 parameters, a birthYear and firstName.
// We define their age by subtracting a year - the argument birthYear
// We define retirement by subtracting a number of years - the previous age const
// Lastly we return a string template literal of the firstName argument  retiring in the const retirement values years.

// The differentiation between using an arrow function to a standard function is the fact that arrow function do not have access to the "this" keyword

// Functions Calling other Functions //

function dicer(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = dicer(apples);
    const orangePieces = dicer(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

const fruit = fruitProcessor(2, 3);
console.log(fruit);

// So here we declare the dicer() function that will take in the amount of fruit and multiply it by 4
// Next our fruit processor takes in 2 parameters (numbers) and creates 2 const applePieces and orangePieces which invoke the dicer() function above whos arguments are defined by the arguments in fruitProcessor.
// Now the juice variable is calling the applePeices variable and orangePieces variable
