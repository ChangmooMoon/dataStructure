var itDiv = ["M", "C", "T", "R", "C", "D", "J"];
var dmpDept = itDiv.splice(3, 3); //index 3 부터 3개요소 서브셋
var cisDept = itDiv; // 제거된 나머지 서브셋
console.log(dmpDept); // R,C,D
console.log(cisDept); // M,C,T,J
// 배열에 요소를 추가하거나 배열의 요소를 제거하는 등 배열을 고치는 용도로 사용
// 1. 시작 인덱스(어느 지점부터 요소 추가?)
// 2. 삭제할 요소의 갯수(요소 추가시 0)
// 3. 배열에 추가할 요소 .....여러개 가능

var num2 = [1, 2, 3, 7, 8, 9];
var newElements = [4, 5, 6];
num2.splice(3, 0, 4, 5, 6);
console.log(num2);
