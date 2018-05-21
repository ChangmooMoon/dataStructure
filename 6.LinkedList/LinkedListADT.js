// 객체 기반 링크드리스트 -->
// Node클래스 : 링크드리스트에 추가할 수 있음
// LinkedList 클래스 : 노드의 삽입,삭제, 리스트 출력, 기타 필요한 기능

function Node(element) {
  this.element = element; // 노드의 데이터
  this.next = null; // 링크드리스트의 다음 노드 링크
}

function LList() {
  this.head = new Node("head"); //
  this.find = find; // 리스트의 특정 데이터 검색
  this.insert = insert; // 새 노드 삽입
  this.remove = remove; // 기존 노드 삭제
  this.display = display; //출력
  this.findPrevious = findPrevious;
}

// 새로운 노드 삽입
function find(item) {
  // 일단 기존 노드 탐색
  var currNode = this.head;
  while (currNode.element !== item) {
    // item이 나올때까지 반복, 못찾으면 null반환
    currNode = currNode.next;
  }
  return currNode; // item에 해당되는 노드 반환
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item); // 기존의 item이 들어있는 노드를 찾는다
  newNode.next = current.next; // 기존 노드의 next프로퍼티를 새 노드의 next 프로퍼티로 설정한다
  current.next = newNode; // 그리고 기존 노드의 넥스트는 새 노드가 된다
}

function display() {
  var currNode = this.head; // currNode에 헤드를 할당하면서 탐색준비// 탐색시작 null이 안나올때까지
  while (!(currNode.next === null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function findPrevious(item) {
  // 특정 노드의 바로 이전노드 찾는 프로퍼티. 이거로 노드 삭제 함수까지 만들꺼다
  var currNode = this.head;
  while (!(currNode.next === null) && currNode.next.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next === null)) {
    prevNode.next = prevNode.next.next; // prevNode의 next를 지금 next의 next로 바꿈. 이전 노드의 링크를 우회시키는 코드
  }
}

var cities = new LList();
cities.insert("seoul", "head");
cities.insert("ilsan", "seoul");
cities.insert("busan", "ilsan");
cities.insert("tokyo", "busan");
cities.display();
console.log("--------");
cities.remove("ilsan");
cities.display();
