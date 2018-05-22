class HashTable {
  constructor() {
    this.table = new Array(137);
    this.values = [];
  }

  hash(string) {
    // horner's method. 해쉬값 결과에 소수를 곱해서 충돌을 피함 31이나 37같이 작은 소수를 쓰자
    const H = 37;
    let total = 0;
    for (var i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
      total += this.table.length - 1;
    }
    return parseInt(total);
  }

  showDistro() {
    for (const key in this.table) {
      if (this.table[key] !== undefined) {
        console.log(key, " : ", this.table[key]);
      }
    }
  }

  put(data) {
    const pos = this.hash(data);
    this.table[pos] = data;
  }

  get(key) {
    return this.table[this.hash(key)];
  }
}

module.exports = HashTable;
