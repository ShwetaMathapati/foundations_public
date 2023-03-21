/*Write the code to calculate the average score and print the following sentence
'Student Kim scored an average of *** marks"
Your code should print the appropriate sentence upon changing the student name and the scores.

CODE TEMPLATE


let personName = console.log("Enter Student name:");
let mathScore = console.log("Enter Math Score:");
let englishScore = console.log("Enter English Score:");
let scienceScore = console.log("Enter Science Score:");


// write your code here
*/
let personName = "Kim";
let mathScore = 70;
let englishScore = 80;
let scienceScore = 60;
score = ((mathScore+englishScore+scienceScore)/3);
avgMarks ="Student "+personName+" scored an average of "+score+" marks";
console.log(avgMarks);