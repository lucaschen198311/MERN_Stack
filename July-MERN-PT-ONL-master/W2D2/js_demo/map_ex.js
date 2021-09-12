const exArr = [1, 2, 5, 8];

const map1 = exArr.map((item) => item * 2);
// console.log(result);

const map2 = exArr.map((item, index) => {
  console.log(item, index);
  return item + 1;
});
console.log(map2);
