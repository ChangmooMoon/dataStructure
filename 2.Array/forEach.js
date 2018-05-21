// 배열을 만들지 않는 반복자 함수

const square = num => {
  console.log(num, num * num);
};
[1, 2, 3, 4, 5, 6].forEach(square);

const isEven = num => {
  return num % 2 === 0;
};
console.log([1, 3, 5, 7].some(isEven));

const add = (runningTotal, currentValue) => {
  return runningTotal + currentValue;
};
var nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(nums.reduce(addf));
