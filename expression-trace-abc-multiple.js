//Write an expression trace for lines 4, 5 and 6 of the following code


let a = 1;
let b = 2;
let c = 3;
a = a + b;
b = b * c + a;
c = a + b / c + a * b;
console.log(a, b, c);

/*EXPRESSION TRACE
Line 4:
a + b
1 + 2
3

Line 5:
b * c + a
2 * 3 + 3
6 + 3
9

Line 6:
a + b / c + a * b
3 + 9 / 3 + 3 * 9
3 + 3 + 3 * 9
3 + 3 + 27
6 + 27
33
*/