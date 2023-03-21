/*Write an expression trace for lines 1 and 2 of the following code:

```js*/
let a = 20 / 5 + (3 % (5 * 3));
let b = (1 + (a % 7)) / (a + 1);
console.log(a, b);

/*EXPRESSION TRACE
Line 1:
20 / 5 + (3 % (5 * 3))
20 / 5 + (3 % 15)
4 + 3 % 15
4 + 3
7

Line 2:
(1 + (a % 7)) / (a + 1)
(1 + (7 % 7)) / (7 + 1)
(1 + 0) / (7 + 1)
1 / (7 + 1)
1 / 8
0.125
*/