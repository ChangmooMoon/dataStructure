// Separate Chaining
// 충돌이 일어나면 아무것도 저장되지 않는 걸 방지하는 기법
// 해시 테이블의 각 배열 요소가 배열 같은 다른 자료구조를 포함한다.
// 이에 따라 키는 실제로 해시테이블의 각 배열 요소가 포함하는 자료구조에 저장된다.
// if. 두 키의 해쉬 리턴값이 같을 때 각 키는 두번째 배열의 서로 다른 장소에 저장됨. 크
var HashTable = require("./HashtableADT");

class HashTableChains extends HashTable {
  constructor() {
    super();
    this.buildChains();
  }
  buildChains() {
    for (var i = 0; i < this.table.length; i++) {
      this.table[i] = new Array();
    }
  }

  showDistro() {
    for (const key in this.table) {
      if (this.table[key][0] !== undefined) {
        console.log(key, " : ", this.table[key]);
      }
    }
  }

  put(key, data) {
    const pos = this.hash(key);
    let index = 0;
    if (this.table[pos][index] === undefined) {
      this.table[pos][index] = data;
    } else {
      ++index;
      while (this.table[pos][index] !== undefined) {
        index++;
      }
      this.table[pos][index] = data;
    }
  }

  get(key) {
    const pos = this.hash(key);
    let index = 0;
    while (this.table[pos][index] != key) {
      if (this.table[pos][index] !== undefined) {
        return this.table[pos][index];
      } else {
        return undefined;
      }
      index++;
    }
  }
  put(key, data) {
    const pos = this.hash(key);
    let index = 0;
    if (this.table[pos][index] === undefined) {
      this.table[pos][index] = data;
    } else {
      ++index;
      while (this.table[pos][index] !== undefined) {
        index++;
      }
      this.table[pos][index] = data;
    }
  }

  get(key) {
    const pos = this.hash(key);
    let index = 0;
    while (this.table[pos][index] != key) {
      if (this.table[pos][index] !== undefined) {
        return this.table[pos][index];
      } else {
        return undefined;
      }
      index++;
    }
  }
}

var hTable = new HashTableChains();
hTable.buildChains();
var names = [
  "David",
  "Jennifer",
  "Donnie",
  "Raymond",
  "Cynthia",
  "Mike",
  "Clayton",
  "Danny",
  "Jonathan"
];

for (var i = 0; i < names.length; i++) {
  hTable.put(names[i]);
}
hTable.showDistro();
