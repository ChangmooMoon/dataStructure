// stack : 리스트의 일종
//가장 윗부분에서만 자료의 추가와 삭제가 일어나서 실행속도가 빠르고 구현이 쉬움(후입선출)
// 진법 변환,회문,재귀 구현시 쓰일 수 있음

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element; // this.top 뒤에 연산자가 붙어서 top위치에 새 요소를 추가하고 top이 증가함
}

function pop() {
  return this.dataStore[--this.top]; // 스택의 탑 위치에 있는 요소를 반환하고 top을 감소시킴
}

function peek() {
  return this.datastore[this.top - 1]; // 배열의 top-1 위치의 요소에 접근해 스택의 탑 요소를 반환함
}

function clear() {
  this.top = 0;
}

function length() {
  return this.top;
}

module.exports = Stack;
