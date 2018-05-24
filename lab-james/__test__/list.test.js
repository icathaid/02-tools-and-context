'use strict';
let List = require('../lib/list.js');

describe('list module', () => {
  it('should return the length of an array when push()ed an item', () => {      
    let bill = new List();
    bill.push('bill');
    expect(bill.length).toBe(1);
  });
  it('should add the word given to the array and return an array element matching that word', () => {
    let ted = new List();
    ted.push('ted');
    expect(ted[(ted.length -1)]).toBe('ted');
  });
  it('should add two words to an array and return a length of 2', () => {
    let excellentAdventure = new List();
    excellentAdventure.push('bill');
    excellentAdventure.push('ted');
    expect(excellentAdventure.length).toBe(2);
  });
  it('should add two words to an array and return the second one', () => {
    let excellentAdventure = new List();
    excellentAdventure.push('bill');
    excellentAdventure.push('ted');
    expect(excellentAdventure[excellentAdventure.length -1]).toBe('ted');
  });
  // .pop() method
  it('should add two words to an array, pop(), and return the new last element of the array', () => {
    let excellentAdventureII = new List();
    excellentAdventureII.push('bill');
    excellentAdventureII.push('ted');
    excellentAdventureII.push('rufus');
    const expected = excellentAdventureII[excellentAdventureII.length -2];
    const actual = excellentAdventureII.pop();
    expect(actual).toBe(expected);
  });
  it('should return undefined if called on an empty list', () => {
    let billAndTed3 = new List();
    const actual = billAndTed3.pop();
    expect(actual).toBe(undefined);
  });

  //  foreach method
  it('should add "Mc" to each name in the list', () => {
    let friends = new List(['Steve', 'Adam']);
    let friendList = new List(['McSteve', 'McAdam']);
    function McIfy(name){
      return 'Mc' + name;
    }
    friends.forEach(McIfy);
    expect(friends).toEqual(friendList);
  });
  //  map method
  it('should add 42 to each element of the input array', () => {
    let questions = new List([1, 2, 3, 4, 5]);
    let answers = new List ([43, 44, 45, 46, 47]);
    function hitchHike(num){
      return num + 42;
    }
    questions.map(hitchHike);
    expect(questions).toEqual(answers);
  });
  //  filter method
  it('should return an array of numbers if given an array of mixed data types', () => {
    let inputList = new List([1, 'bill', 2, 'ted', 3]);
    let outputList = new List([1, 2, 3]);
    function noMoreAdventures(thing){
      if(typeof thing === 'number'){
        return true;
      }
    }
    expect(inputList.map(noMoreAdventures)).toEqual(outputList);
  });
});