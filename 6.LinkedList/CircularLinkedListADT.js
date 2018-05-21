// single linked list랑 비슷한데 다른 점은 head의 next프로퍼티가 자기 자신을 가리킴

function Node(element) {
  this.element = element; // 노드의 데이터
  this.next = null; // 링크드리스트의 다음 노드 링크
}

function LList() {
  this.head = new Node("head");
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
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
  // circular 링크드리스트에 맞는 출력함수. while루프의 실행조건을 헤드에서 멈추도록 해둠
  var currNode = this.head;
  while (!(currNode.next === null) && !(currNode.next.element === "head")) {
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
