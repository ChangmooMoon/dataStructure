// ADT : abstract data type. 추상적 자료형은 인터페이스와 구현을 분리하여 추상화 계층을 둔 것이다.
// list : 데이터 저장 순서가 중요하지 않거나 저장된 데이터를 검색할 필요가 없을 때 쓸만함
function List() {
  this.listSize = 0; // 리스트의 요소수
  this.pos = 0; // 현재 위치
  this.dataStore = [];
  this.clear = clear; // 모든 요소 삭제
  this.find = find; // 리스트의 요소 검색
  this.toString = toString; // 리스트를 문자열로 표현해 반환
  this.insert = insert; // 기존 요소 위로 새 요소를 추가
  this.append = append; // 새 요소를 리스트의 끝에 추가
  this.remove = remove; // 리스트 요소 삭제
  this.front = front; // 현재 위치를 리스트 첫 번째 요소로 설정
  this.end = end; // 현재 위치를 리스트 마지막 요소로 설정
  this.prev = prev; // 현재 위치를 한 요소 뒤로 이동
  this.next = next; // 현재 위치를 한 요소 앞으로 이동
  this.length = length; // 리스트의 요소수 반환
  this.currPos = currPos; // 리스트의 현재 위치 반환
  this.moveTo = moveTo; // 현재 위치를 지정된 위치로 이동
  this.getElement = getElement; // 현재 위치의 요소를 반환
  this.length = length; // 리스트의 요소수 반환
  this.contains = contains; //리스트에 특정 값이 있는지 판단
}

function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) return i;
  }
  return -1;
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore;
}

function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

function clear() {
  delete this.dataStore;
  this.dataSTore.length = 0;
  this.listSize = this.pos = 0;
}

function contains(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) return true;
  }
  return false;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  if (this.pos > 0) --this.pos;
}

function next() {
  if (this.pos < this.listSize - 1) ++this.pos;
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataSTore[this.pos];
}
