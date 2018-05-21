/*
진법 변환(n이라는 숫자가 있고, b진법으로 변환시)
  1. n의 가장 오른쪽 숫자는 n%b 이다. 이 값을 스택에 추가한다.
  2. n을 n/b로 치환한다
  3. n=0이 되고 나머지가 없을 때까지 1,2번을 반복한다
  4. 스택에 저장된 숫자를 모두 꺼내 변환된 숫자 문자열을 만든다
  (이 알고리즘은 2진수부터 9진수 사이에서만 동작)
*/

var Stack = require("./stackADT");

function mulBase(num, base) {
  var s = new Stack();

  do {
    s.push(num % base);
    num = Math.floor((num /= base));
  } while (num > 0);

  var converted = "";
  while (s.length() > 0) converted += s.pop();
  return converted;
}

var newNum = mulBase(32, 2);
var newNum2 = mulBase(125, 8);
console.log(newNum);
console.log(newNum2);
