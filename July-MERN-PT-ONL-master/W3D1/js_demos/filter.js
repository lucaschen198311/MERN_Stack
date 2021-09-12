// The filter function returns a new list with the items you need
// This function goes through each item in an array

let arr = [1, 3, 5, 7, 9];
// Here, the new list will include ONLY numbers === 5
const filteredArr = arr.filter((num) => {
  return num === 5;
});
console.log(filteredArr);

// Here, the new array will include ONLY numbers that ARE NOT 5
const filteredArr2 = arr.filter((num) => num !== 5);
console.log(filteredArr2);

// When we provide a second argument to the filter callback function, it serves as the index of the item
const filteredArr3 = arr.filter((num, index) => index === 3);
console.log(filteredArr3);

const filteredArr4 = arr.filter((num, index) => index !== 3);
console.log(filteredArr4);
