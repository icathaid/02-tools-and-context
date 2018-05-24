'use strict';

class List {
  constructor() {
    this.length = 0;
  }
  push(item) {
    this[this.length++] = item;
    return this.length;
  }
  pop() {
    this.length--;
    if(this.length <= 0){
        return undefined;
    };
    return this[this.length -1];
  }
}

module.exports = List;