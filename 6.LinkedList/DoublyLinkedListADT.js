// 이중 링크드리스트. 링크 추가할때 작업이 더 늘어나지만
// 노드 삭제 작업은 간단해짐

function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
  this.findLast = findLast;
  this.dispReverse = dispReverse;
}

function dispReverse() {
  // 역순으로 요소 출력
  var currNode = this.head;
  currNode = this.findLast;
  while (!(currNode.previous === null)) {
    console.log(currNode.element);
    currNode = currNode.previous;
  }
}

function findLast() {
  var currNode = this.head;
  while (!(currNode.next === null)) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(item) {
  var currNode = this.find(item);
  if (!(currNode.next === null)) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current; //새 노드의 previous를 이전 노드로 설정
  current.next = newNode;
}
