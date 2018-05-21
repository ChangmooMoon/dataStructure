var nums = [];
for (var i = 0; i < 10; i++) {
  nums[i] = i + 1;
}
console.log(nums);
var samenums = nums;
nums[0] = 400;
console.log(samenums[0]); // 배열을 다른 배열로 할당할 때 실제로는 할당된 배열의 레퍼런스를 할당함


