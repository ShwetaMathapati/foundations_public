//Guess the output for the following code :

let a = 6;
let b = '' + a;
let c = 6 + b - a;
console.log(a);
console.log(b);
console.log(c);


/*ET
'' + a
''+6
' 6'

6 + b - a
6 + ' 6' - 6 (subtraction changes a string into number)
*/