// The map function returns a new array
// Like filter, if we give a second arg to the callback function it serves as index of array

var x = [1, 2, 3, 4, 5];

const newArr = x.map((item) => item + 2);
console.log(newArr);

const newArr2 = x.map((item, index) => index);
console.log(newArr2);
