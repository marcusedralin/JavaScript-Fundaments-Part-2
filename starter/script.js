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

// function dicer(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = dicer(apples);
//     const orangePieces = dicer(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// const fruit = fruitProcessor(2, 3);
// console.log(fruit);

// So here we declare the dicer() function that will take in the amount of fruit and multiply it by 4
// Next our fruit processor takes in 2 parameters (numbers) and creates 2 const applePieces and orangePieces which invoke the dicer() function above whos arguments are defined by the arguments in fruitProcessor.
// Now the juice variable is calling the applePeices variable and orangePieces variable

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetired = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} can retire in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired.`);
//         return -1;
//     }
//     // return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetired(1991, 'Marcus'));
// console.log(yearsUntilRetired(1932, 'Nina'));

// Again we are invoking a function within another
// the yearsUntilRetired takes in a birthYear(num) and firstName(string)
// creates a variable that stores the value of the calcAge(birthYear) function
// that birthYear argument recieves the same birthYear argument in the yearsUntilRetired function
// the calcAge function takes in a birthYear param but is defined asynchonously by the yearsUntilRetired code block
// we invoke the calcAge() inside yearsUntilRetired to define what the variable age is
// our if block is checking to see if the retirement value is higher than 0 or less
// That deteremines whether or not the birthYear and firstName are retired or not

// Arrays //

// const friend1 = 'Steve';
// const friend2 = 'Bob';
// const friend3 = 'Joseph';

// // Arrays are like big containers from which we can throw variables and then reference them

// const friends = ['Mary', 'Celeste', 'Amber'];
// console.log(friends);

// console.log(friends[0]); // Mary

// const years = new Array(1990, 3233, 2008, 2021);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// // You access array values based on their indexed value starting from 0
// // Using the .length method you can retrieve the length of the whole array
// // to acces the last value you use the name of the array - then the indexed value - this is dynamically defined by stating name of the array.length - 1
// //

// friends[2] = 'Amanda';
// console.log(friends);

// // You can mutate an array by changing the indexed value of the array
// // Only primitive values are immutable
// // We cannot change the entire array as it is primitive
// // friends = ['john', etc]

// const firstName = 'Marcus'
// const marcus = [firstName, 'Edralin', 2021 - 1990, 'developer', friends];
// console.log(marcus);

// // You can even store expressions and other arrays within an array

// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// }

// const bYears = [1990, 2010, 1994, 1936, 1988];

// const age1 = console.log(calcAge(bYears[0]));
// const age2 = console.log(calcAge(bYears[1]));
// const age3 = console.log(calcAge(bYears[2]));
// const age4 = console.log(calcAge(bYears[bYears.length - 1]));

// const ages = [calcAge(bYears[0]), calcAge(bYears[1]), calcAge(bYears[bYears.length - 1])]
// console.log(ages);

// Basic Array Operations (Methods) //

// JS has some built in functions you can apply directly on to any array

// const friends = ['Mary', 'Celeste', 'Amber'];
// const newLength = friends.push('Briana'); // shows the number of elements after the push
// console.log(friends);
// console.log(newLength);
// // The push array method adds whatever you push into the end of the array

// friends.unshift('Derrick');
// console.log(friends);
// // The unshift array method adds whatever you unShift into the beginning of the array

// friends.pop();
// const popped = friends.pop(); // saves the value of what you removed
// console.log(popped);
// console.log(friends);
// // The pop array method removes the last element from the array

// friends.shift();
// console.log(friends)
// // The shift array method removes the first element from the array

// console.log(friends.indexOf('Mary'));
// console.log(friends.indexOf('Bob')); // Returns -1 if the element is not there
// // The indexOf array method returns the value of the value you enter from the array

// console.log(friends.includes('Celeste'));
// // The includes array method it returns true or false if the value is or isn't there

// friends.push(23);
// console.log(friends.includes('Mary')); //true
// console.log(friends.includes('Bob')); // false
// console.log(friends.includes('23')); // false because 23 isn't a string - uses STRICT equality
// console.log(friends.includes(23)); // true 

// if (friends.includes('Mary')) {
//     console.log('You have a friend named Mary.');
// }

// You can use the includes method to write conditionals
// includes() returns a boolean

// Intro to Objects //

// const marcusArray = [
//     'Marcus',
//     'Edralin',
//     2021 - 1990,
//     'developer',
//     ['See', 'Sam', 'Michale']
// ];

// // You can only reference a value of an array by their order number
// // In an Object you can use key value pairs to call data from a stucture

// const marcus = {
//     firstName: 'Marcus',
//     lastName: 'Edralin',
//     age: 2021 - 1990,
//     job: 'developer',
//     friends: ['Sam', 'Michael', 'See']
// }

// This object has 5 properties that have their own respective values
// Object Literal syntax - we literally write down whats in the object
// In objects the order doesn't matter when you retrieve the data

// Arrays- structured data
// Objects - unstructured data

// Dot vs Bracket Notation //

// const marcus = {
//     firstName: 'Marcus',
//     lastName: 'Edralin',
//     age: 2021 - 1990,
//     job: 'developer',
//     friends: ['Sam', 'Michael', 'See']
// }

// console.log(marcus);
// // Displays the object and its properties in alphabetical order

// console.log(marcus.lastName);
// console.log(marcus['lastName']);
// // To grab a specific property of the object you use call the object.propertyName
// // Same goes for bracket notation - object['propertyName']

// const nameKey = 'Name';
// console.log(marcus['first' + nameKey]);
// console.log(marcus['last' + nameKey]);

// // bracket notation allows you to have an expression when calling the object
// // This example you define the nameKey variable as the string 'Name' then when we call the firstName property by concatenating the string 'first' with nameKey "Name" so it knows you are asking for the 'firstName' property
// // this is computed property names

// // console.log(marcus.'last' + nameKey); DOESN'T WORK

// const interestedIn = prompt('What do you want to know about Marcus? Choose between firstName, lastName, age, job, and friends.');
// // The bracket notation allows for the prompt to dynamically compute the property names value from the marcus object

// if (marcus[interestedIn]) {
//     console.log(marcus[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.');
// }

// // The prompt occurs - user inputs one of the 5 mentioned props - after you input the prompt it stores that prompt value in the console.log expression - marcus[userInputFromPrompt] - dynamically returns the property as though you put in marcus[job] - returns 'developer'

// marcus.location = 'Las Vegas';
// marcus['twitter'] = '@journey_ugf';
// console.log(marcus);

// // Challenge 
// // "Marcus has 3 friends and his best friend is called Michael"

// console.log(`${marcus.firstName} has ${marcus.friends.length} friends and his best friend is called ${marcus.friends[1]}`);

// Object Methods //

// const marcus = {
//     firstName: 'Marcus',
//     lastName: 'Edralin',
//     birthYear: 1990,
//     job: 'developer',
//     friends: ['Sam', 'Michael', 'See'],
//     hasDriversLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2021 - birthYear;
//     // }

//     // calcAge: function () {
//     //     // console.log(this) returns the object this is referring to
//     //     return 2021 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2021 - this.birthYear; // creating the age prop in the marcus object
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${marcus.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
//     }
// };

// // Any function that is attached to an object is a method

// console.log(marcus.calcAge());
// // console.log(marcus['calcAge'](1990));
// console.log(marcus.age);
// console.log(marcus.age);
// console.log(marcus.age);

// // The "this" keyword is a reference to the object called the method
// // It give a means of dynamically selecting the appropriate object

// // Challenge //

// // "Marcus is a 46 year old teacher, and he has a driver's license."

// console.log(marcus.getSummary());

// Iteration: the For loop //

// console.log('Lifting Weights rep 1')
// console.log('Lifting Weights rep 1')
// console.log('Lifting Weights rep 1')
// console.log('Lifting Weights rep 1')
// console.log('Lifting Weights rep 1')
// console.log('Lifting Weights rep 1')
// console.log('Lifting Weights rep 1')
// console.log('Lifting Weights rep 1')
// console.log('Lifting Weights rep 1')
// console.log('Lifting Weights rep 1')

// for loop keeps running while the condition is true
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting Weights reptition ${rep}`);
// }

// This allows us to do something really repetitive
// You define the start - set the condition - set the iteration
// Then it will run the code block however many times it remains true

// Looping Arrays, Breaking and Continuing //

// const marcusArray = [
//     'Marcus',
//     'Edralin',
//     2021 - 1990,
//     'developer',
//     ['See', 'Sam', 'Michale'],
//     true
// ];

// // We are gonna use a For loop to loop through this array

// // console.log(marcus[0])
// // console.log(marcus[1])
// // console.log(marcus[2])
// // console.log(marcus[3])
// //...
// // marcus[5] does'nt exist

// const types = []; // an empty array

// for (let i = 0; i < marcusArray.length; i++) {
//     // reading an marcusArray
//     console.log(marcusArray[i], typeof marcusArray[i]);
//     // filling types array
//     // types[i] = typeof marcusArray[i];
//     types.push(typeof marcusArray[i]);
// }

// console.log(types);

// // Notice this is logging each property of the object
// // i stands for the index number
// // it dynamically loops through the array based on the indexed number
// // then it does the code block each loop

// const years = [1992, 2003, 1934, 1979];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2021 - years[i]);
// }
// // We iterate through the years array
// // In each interation we calculated 2021 minus each year value in the years array then we pushed those values to the ages empty array
// console.log(ages);

// // continue and break //
// console.log('----ONLY STRINGS----');
// for (let i = 0; i < marcusArray.length; i++) {
//     if (typeof marcusArray[i] !== 'string') continue;
//     // We are using 'continue' to skip anything that doesn't pass the if block
//     console.log(marcusArray[i], typeof marcusArray[i]);
// }

// console.log('----BREAK WITH NUMBER----');
// for (let i = 0; i < marcusArray.length; i++) {
//     if (typeof marcusArray[i] === 'number') break;
//     // We are using 'break' to stop once it finds the condition truthy
//     console.log(marcusArray[i], typeof marcusArray[i]);
// }

// Looping Backwards and Loops in Loops //

const marcusArray = [
    'Marcus',
    'Edralin',
    2021 - 1990,
    'developer',
    ['See', 'Sam', 'Michale']
];

// 0, 1 ..., 4
// 4, 3 ..., 0

for (let i = marcusArray.length - 1; i >= 0; i--) {
    console.log(i, marcusArray[i]);
}

// We are using the dynamic value of the arrays last value
// We will stop when the value is greater than or equal to 0
// Then we choose to decrement rather than increment 
// This prints the array backwards

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} Lifting weights repetition ${rep}`);
    }
}

// This is a nested loop
// Basically the first loop occurs a total of 3 times
// Within each of the main loop there are 5 iterations
// Looks like 3 exercises with 5 reps in each set

