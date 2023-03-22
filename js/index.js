//A Variable lesson 

// let message = 'Hello.. From the past!!!'; //tore string Hello in message variable
// alert(message); //Shows value stored in Variable message as popup 
// let user = 'Mike', age = 25, greeting = 'Hello, Mike!'; //multiple vars at once

// message = "I've changed.."; //change value
// message = greeting; //copy value to other variable 
// alert(message);

// const myBirthday = '08.07.1997'; // Constant, nonchanging variable
// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";
// //For when you have a difficult value to remeber
// let color = COLOR_ORANGE;
// alert(color);

// // Numbers 
// console.log(2+2);
// console.log(1+2+3+4+5+6);
// console.log(((4+6+9)/77));
// let a = 10;
// console.log(a);
// console.log(9*a);
// const MAX = 57;
// let actual = MAX - 13;
// let percentage = actual / MAX;
// console.log(percentage);

//Strings 

const string = "The revolution will not be televised";
console.log(string); //  The revolution will not be televised
badString = string;
console.log(badString); //The revolution will not be televised

//below lets you have ' in middle of text when using ''
const bigMouth = 'I\'ve got a big mouth!';
console.log(bigMouth); //I've got a bit Mouth!

//concatinating strings
//use a back tic ` as a template literal?
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting) //Hello, chris

const one = "Hello, ";
const two= "How are you?";
const joined = `${one}${two}`;
//can also be done like this
const first = "Michael";
const last = "Cuesta";
const full_name = first + ' ' + last;
console.log(full_name); //Michael Cuesta
console.log(`${first} ${last}`); // prints Michael Cuesta exactly as inputed 