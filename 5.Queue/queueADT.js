// queue : 리스트의 일종.
// 끝부분으로 데이터가 삽입되고 앞부분에서 데이터가 삭제되는 자료구조
// 일어난 순서대로 데이터를 저장하는 자료구조. 가장 나중에 들어간 데이터가 가장 먼저 처리되는 스택과 정반대 순서로 데이터를 처리
// 선입선출 구조. 운영체제의 프로세스 처리순서, 프린트 스풀러, 은행,상점의 대기줄 등의 시뮬레이션 어플리케이션에서 사용

// enqueue, dequeue 가 주요 동작

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataSTore[this.dataStore.length - 1];
}

function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; i++)
    retStr += this.dataStore[i] + "\n"; // 큐의 모든 요소 출력

  return retStr;
}

function empty() {
  if (this.dataStore.length === 0) return true;
  else return false;
}

module.exports = Queue;
