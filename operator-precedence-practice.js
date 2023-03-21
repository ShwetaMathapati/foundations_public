/*Operator Precedence Rules
-------------------------
High precedence: * / %
Low precedence: + -
Operations with same precedence 
are performed left to right

Guess the output of the following code keeping in mind the operator precedence :

*/

console.log(3 % 2 + 5 * 2 % 2);

/*EXPRESSION TREE
3 % 2 + 5 * 2 % 2
3 % 2 + 10 % 2
3 % 2 + 10 % 2
1 + 0
1
*/