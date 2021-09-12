// In your previous Javascript experience, you have seen a function like this...
function logThis(item) {
  console.log(item);
}
logThis("yo");

// ... or this
var logThis = function (item) {
  console.log(item);
};
logThis("yo");

// But as of ES6 and later, the more common way of writing functions is like this...
// assigning the value of the function to a "const" and using an "arrow function" AKA
// "fat arrow function"
const logThis = (item) => {
  console.log(item);
};
logThis("yo");

// Another example....
const addTwoToN = (n) => {
  n = n + 2;
  return n;
};
console.log(addTwoToN(5));

// With arrow functions, if our function IS ONLY 1 LINE, we can forego the use of the {}'s
// altogether. The following function will just log the arg provided to the function
// But this only works for function with ONLY 1 LINE. More than 1 line -> you need to use {}'s
const doThis = (thing) => console.log(`We're doing ${thing}`);
doThis("code");

// with ES6 arrow functions, we can also use something called "IMPLICIT RETURNS"

// Consider the following function
const addTwoNums = function (x, y) {
  return x + y;
};
console.log(addTwoNums(2, 3));

// But with an arrow function, if a function HAS ONLY 1 LINE AND JUST RETURNS SOMETHING
// WITH THAT ONE LINE, we can forego the use of {}'s and we don't even have to type "return"!
// Because it is IMPLICITLY RETURNED !
// prettier-ignore
const addTwoNums = (x, y) => x + y;
console.log(addTwoNums(3, 4));

const divideBy2 = (x) => x / 2;
console.log(divideBy2(6));
