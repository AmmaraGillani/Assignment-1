// • Tests for equality and inequality with strings
// Equality string
let str1="ammara";
let str2= String("ammara");
console.log(str1 +" == "+str2);
console.log(str1 == str2);
// Inequality string
let string1 = 'shahzain';
let string2 = 'ammara';
console.log(string1 +" != "+string2);
console.log(string1 != string2);

// • Tests using the lower case function
let string3 = 'Ammara';
let string4 = string3.toLowerCase();
console.log(string3 +" == "+string4);
console.log(string3 == string4);
 
// • Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
let num1=10;
let num2=9;
// Equality Number
console.log(num1 + " == "+num2);
console.log( num1 == num2 );
// Inequality Number
console.log(num1 + " != "+num2);
console.log( num1 != num2 );
// greater than
console.log(num1 + " > "+num2);
console.log(num1 > num2);
// less than
console.log(num2 + " < "+num1);
console.log(num2 < num1);
// greater than or equal to
console.log(num1 + " >= "+num2);
console.log(num1 >= num2);
// less than or equal to
console.log(num1 + " <= "+num2);
console.log(num1 <= num2);

// • Tests using "and" and "or" operators
//  AND
console.log(num1 + " & "+num2);
console.log(num1 & num2);
//  OR
console.log(num1 + " | "+num2);
console.log(num1 | num2);

// • Test whether an item is in a array
let string ="I'm a web developer";
console.log('the word web is available in a string');
console.log(string.includes('web'));
const arr = [3,7,5,9];
 console.log('Item 5 is available from index 2');
 console.log(arr.includes(5,2));

 // • Test whether an item is not in a array
 console.log('Item 8 is available from index 3');
 console.log(arr.includes(8,3));
