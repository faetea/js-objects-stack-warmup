'use strict';
// You should be able to create a new stack with var stack = Stack.new();.
// Your stack should have two methods, push and pop.
// push adds a new value to the stack's storage and returns the added value
// pop removes the most recently added value from the stack's storage and returns it
// You should not use Array.prototype.push() or Array.prototype.pop()


var Stack = function Stack () {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function push (value) {
  // add value to storage
  // increment size counter
  this._storage[++this._size] = value;
};

Stack.prototype.pop = function pop () {
  // remove newest value from storage, only if data exists
  if (this._size < 0) {
    return null;
  } else {
  // decrement size counter, only if data exists
    return this._storage[this._size--];
  }
};




// Ref Source
// https://www.quora.com/How-do-I-create-a-JavaScript-object-prototype-with-private-data


// var stack = function() {
//     this.storeArray = [];
//     this.index = -1;

//     this.print = function () {
//         console.log("print called!");
//     }
// };

// stack.prototype.push = function (val) {
//     this.print();
//     this.storeArray[++this.index] = val;
// };

// stack.prototype.pop = function () {
//     this.print();
//     if (this.index < 0) {
//         return null;
//     } else {
//         return this.storeArray[this.index--];
//     }
// };

// stack.prototype.isEmpty = function () {
//     this.print();
//     return (this.index < 0);
// }
