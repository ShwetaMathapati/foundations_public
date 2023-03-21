/*Write code to swap the two given numbers.

Hint: You will need to create a new variable

Note: Your code should work with any input.  For example

- If num1=20 and num2=30, then the output should be 30 20.  
- If num1=17 and num=22, then the output should be 22 and 17.  
- If num1=1000 and num2=6, then the output should be 6 1000
etc.*/

let num1 = 20;
let num2 = 30;

// Write your code here
let swap = num1;
num1 = num2;
num2 = swap;
console.log(num1, num2); // should give 30 20
