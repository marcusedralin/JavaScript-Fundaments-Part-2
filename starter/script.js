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

// A function can hold one or more complete lines of code that you can reuse over and over again

function logger() {
    console.log('My name is Marcus');
}

// We needed to reuse this logger later in our code

logger(); // My name is Marcus
logger(); // My name is Marcus
logger(); // My name is Marcus

// Now we can invoke/run/call the function via its name followed by parens
// Usually when we write functions we pass data into a function and a function can return data which then we can use for something else in our app
// Functions are like machines
// Likened to a food processor you put something in the function it does something to the data and returns it into a different form

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(4, 3); // 4 3

// Parameters are like variables that are specifc only to this function that are defined when you call the function
// These represent the input data

const appleJuice = fruitProcessor(6, 0);
console.log(appleJuice);

// The fruitProccessor function is taking in 2 params of numbers then logging those to the console: 4, 3 then 6, 4. 

// Next that function created a scoped variable of juice the stores a string template literal that invokes the apples and oranges parameters and then we return that variable juice from the function call.

// The const applejuice is the whole function of fruitProccessor with numbers being used as arguments for the original fruitProcessor function.

// Lastly we log the appleJuice variable to the console which outputs the returned value of juice based on the arguments inputed.

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Not all functions need to return anything or have parameters
// DRY Don't Repeat Yourself
// Use functions to do so

