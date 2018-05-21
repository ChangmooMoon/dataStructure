// 우선순위 큐
// 선입선출 방식이 아닌 우선순위와 같은 다른 기준으로 요소를 삭제해야 할때

var Queue = require("./queueADT");

function Patient(name, code) {
  this.name = name;
  this.code = code;
}
// code는 환자의 우선순위, 심각성을 나타내는 정수. 가장 높은 우선순위를 가진 요소를 삭제하도록 짬
// dequeue() 배열은 큐의 배열을 둘러보면서 가장 낮은 우선순위 코드를 갖는다. .splice() 함수를 이용해서 우선순위가 가장 높은 요소를 삭제한다.

function dequeue() {
  var entry = 0;
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i].code < this.dataStore[entry].code) {
      entry = i;
    } // 배열 순회하면서 우선순위가 높은 인덱스값이 entry가 됨
  }
  return this.dataStore.splice(entry, 1);
}

function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; i++) {
    retStr +=
      this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
  }
  return retStr;
}

var p = new Patient("smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
var seen = ed.dequeue();
