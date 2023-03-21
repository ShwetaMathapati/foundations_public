//Write an expression trace for lines 4, 5, 6 and 7:


let a = 3;
let b = 'a';
let c = 5;
c = (a + c) * c;
a = 2 * a - c;
b = b + 'b';
let d = b + 'c';
console.log(a, b, c, d);

/*EXPRESSION TRACE 
Line 4:
(a + c) * c
(3 + 5) * 5
8 * 5
40

Line 5:
2 * a - c
2 * 3 - 40
6 - 40
-34

Line 6:
b + 'b'
'a' + 'b'
'ab'

Line 7:
b + 'c'
'ab' + 'c'
'abc'
*/