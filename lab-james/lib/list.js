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
    }
    return this[this.length -1];
  }
  forEach(func){
    for(var i = 0; i < this.length; i++){
      this[i] = func(this[i]);
    }
    return undefined;
  }
  map(func){
    var theAnswer = [];
    for(var i = 0; i < this.length; i++){
      this[i] = func(this[i]);
    }
    return theAnswer;
  }
}

module.exports = List;