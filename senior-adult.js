/*Assign a boolean expression to the following variables, such that is has true/false depending on the value of age as follows:
- senior citizens are aged above 65
- children are aged below 18
- adults are aged above or equal to 18.*/

let age = 70;
let isSenior = age >= 65 ; // write expression
let isAdult = age >= 18 ;  // write expression
let isChild = age < 18 ;  // write expression

console.log(isSenior);
console.log(isAdult);
console.log(isChild);