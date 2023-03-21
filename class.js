/* '*' / % high
+ - low
() --> left to right
String to number --> string to string, operate --> output is a string
Number to string --> string to string, operate --> output is a string
Number to number --> no change, operate --> output is a number
String conversion performs a concatenation
Integer or number performs arithmetic operation
-.* / always convert strings to number
+ will append strings and number '2'+1 gives '21'
- gives a NaN result when string can't be converted to number
'' operator  
Question 2
let a = '1';
let b = '2';
let c = '3';
console.log(a - b);
console.log(a *'b');
console.log('a'+'b');
console.log( 'a' / b);
console.log(a % b);

Question 3
let a = 'a';
let b = 5 ;
a = a + 'b';
b = b + 5;
let c = b + '1';
console.log(c)
a = a+c;
console.log(a)
b = b+ c;
console.log(b)
console.log(a,b);

let x = "hello";
let y = x - 5; //The output is Nan and it is sticky
console.log(y); 
y=y+3; //The output is Nan as y is NaN
console.log(y);
y=y*2;
console.log(y);
y=y/4;
console.log(y);

Question 7
let age = 18;
let isSenior = age > 65;
let isAdult = age >= 18;
let isChild = age<18;

console.log(isSenior);
console.log(isAdult);
console.log(isChild);

question 9
let alf = 'hello';
let soo = 1+4*4;
let kim = '-';
alf = alf+kim;
soo = soo+1;
soo = kim+soo%5;
let ping = alf +(soo + 2 -12<-2200);
alf = alf +((3*soo) <=(soo-3));
console.log(ping);
console.log(alf);


let x = ((2 + 3) * 4 + 2) * (40 % 6);
console.log(x);
let y =  20 / 5 + (3 % (5 * 3));
console.log(y);
let z = (1 + (x % 7))/(y + 1);
console.log(z); */

a = 'hello-' + ((3 * '-3') <= ('-3' - 3));
b = (3 * '-3');
c = ('-3' - 3);
d = ((3 * '-3') <= ('-3' - 3));
console.log(a,b,c,d);