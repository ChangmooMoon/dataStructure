// 낮은 자리수부터 비교해서 정렬하는 방식

var Queue = require("./queueADT");

// digit은 1의자리인지 10의자리인지 구분하는 인자
function distribute(nums, queues, n, digit) {
  for (var i = 0; i < n; i++) {
    if (digit === 1) queues[nums[i] % 10].enqueue(nums[i]);
    else queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
  }
}

//큐에 저장된 숫자를 수집하는 함수
function collect(queues, nums) {
  var i = 0;
  for (var digit = 0; digit < 10; digit++) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
}

function dispArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] + " ");
  }
}

var queues = [];
for (var i = 0; i < 10; i++) {
  queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; i++) {
  nums[i] = Math.floor(Math.floor(Math.random() * 101));
}

console.log("before radix sort: ");
dispArr(nums);

distribute(nums, queues, 10, 1);
collect(queues, nums);

distribute(nums, queues, 10, 10);
collect(queues, nums);

console.log("\n\n After radix sort: ");
dispArr(nums);
