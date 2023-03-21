/*Guess the output by creating object diagram

<img src='https://github.com/McLarenCollege/foundations_public/raw/main/images/object-diagram-hello-greeting.png' width=500 />*/

let greeting = "hello";
let salutation = "goodbye";
let c = 4;
salutation = greeting;
c = c + 2;
greeting = c-3;
console.log(greeting, salutation, c);