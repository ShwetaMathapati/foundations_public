//Write an expression trace for lines 5, 6 and 7 of the following code

//<img src='https://github.com/McLarenCollege/foundations_public/raw/main/images/object-diagram-abc.png' width=400/img>

let a = 'a';
let b = 5;
a = a + 'b';
b = b + 5;
let c = b + '1';
a = a + c;
b = b + c;
console.log(a,b);

/*EXPRESSION TRACE
Line 5:
b + '1'
10 + '1'
'101'

Line 6:
a + c
'a5'+'101'
'a5101'

Line 7:
b + c
10+'101'
'10101'
*/