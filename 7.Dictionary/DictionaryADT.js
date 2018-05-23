// key:value pair로 데이터를 저장. 클래스로 하면 아주쪼금 관리하기 쉬워짐
// 내부적으로 Object클래스가 아니고 Array클래스를 씀
// 정렬할 때의 이슈있음

function Dictionary() {
  this.add = add;
  this.datastore = new Array();
  this.find = find;
  this.remove = remove;
  this.showAll = showAll; // 정렬해주는 프로퍼티
  this.count = count;
  this.clear = clear;
}

function add(key, value) {
  this.datastore[key] = value;
}

function find(key) {
  return this.datastore[key];
}

function remove(key) {
  delete this.datastore[key];
}

// sort기능 까지 추가
function showAll() {
  for (var key in Object.keys(this.datastore).sort()) {
    console.log(`{key}: {this.datastore[key]`);
  }
}

function count() {
  var n = 0;
  for (var key in Object.keys(this.datastore)) {
    ++n;
  }
  return n;
}

function clear() {
  for (var key in Object.keys(this.datastore)) {
    delete this.datastore[key];
  }
}
