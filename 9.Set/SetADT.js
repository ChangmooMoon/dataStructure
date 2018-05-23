// 텍스트에서 고유의 단어 목록 추출 하는 등 고유한 요소로 이루어진 집합이 필요한 상황에 잘 쓰임.(순서가 상관없고 정렬 안되있음, 집합의 멤버는 고유한게 특징)

function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union; // union
  this.intersect = intersect; // intersect
  this.subset = subset; // subset
  this.difference = difference;
  this.show = show;
  this.contains = contains;
}

// 고유한 멤버만 포함하도록 걸러주는 기능 넣음
function add(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true;
  } else return false;
}

// splice로 요소 삭제하고 boolean 리턴
function remove(data) {
  let pos = this.dataStore.indexOf(data);
  if (pos > -1) {
    this.dataStore.splice(pos, 1);
    return true;
  } else return false;
}

function show() {
  return this.dataStore;
}

function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  } else return false;
}

function union(set) {
  let tmpSet = new Set();
  for (var i = 0; i < this.dataStore.length; i++) {
    tmpSet.add(this.dataStore[i]);
  }
  for (var i = 0; i < set.dataStore.length; i++) {
    if (!tmpSet.contains(set.dataStore[i])) {
      tmpSet.dataStore.push(set.dataStore[i]);
    }
  }
  return tmpSet;
}
function intersect(set) {
  let tmpSet = new Set();
  for (var i = 0; i < this.dataStore.length; i++) {
    if (set.contains(this.dataStore[i])) {
      tmpSet.add(this.dataStore[i]);
    }
  }
  return tmpSet;
}

function subset(set) {
  // subset인지 검사해줌
  if (this.size() > set.size()) return false;
  else {
    for (var member in this.dataStore) {
      if (!set.contains(member)) return false;
    }
  }
  return true;
}

function size() {
  return this.dataStore.length;
}
