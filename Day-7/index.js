let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.reduce(function (acc, cur) {
  return acc * cur;
});
console.log(newArr);
