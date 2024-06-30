//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let str1 = "zoya";
let str2 = "jiya";
let num1 = 5;
let num2 = 10;
let arr = ['car','taxi','bus'];

//Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings");
console.log(str1 === 'zoya');
console.log(str1 === str2);

//Test sing lower case function
console.log("Test sing lower case function");
console.log(str1.toLowerCase() === 'zoya');
console.log(str2.toLowerCase() !== 'jiya');

//numerical tests
console.log("numerical test");
console.log(1<2);
console.log(num1 >= num2);
console.log(num1 === num2);
console.log(num2 !== 10);

//Tests using "and" and "or" operators
console.log("Tests using and and or operators");
console.log((num1<10) && (num2>5));
console.log((num1<3) || (num2>15));

//vTest whether an item is in a array
console.log("Test whether an item is in a array");
console.log(arr.includes('car'));
console.log(arr.includes('truck'));

//Test whether an item is not in a array
console.log("Test whether an item is not in a array");
console.log(!arr.includes('truck'));
console.log(!arr.includes('car'));