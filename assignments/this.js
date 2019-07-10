/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding is when this keyword has no scope inside of an object, so it 
    gets binded to the actual enviornment, such as google chrome window or your IDE.
* 2. Impliciit binding occurs when you invoke a function using dot notation.
* 3. Explicit binding occurs when using call, bind, and/or apply are used in a function.
    In all three of these methods, you explicitly chose what the context of this will be.
* 4. New binding occurs when a new object is created using a constructor function.
    This keyword is tied to the context of each item created from the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// console.log(this);

// // Principle 2

// // code example for Implicit Binding

// const Item = {
//     name: 'thing',
//     doSomething: () => {
//         console.log(`Hello! I am a ${this.name}`);
//     }
// }

// Item.doSomething();

// // Principle 3

// // code example for New Binding

// function Item (newItem) {
//     this.name = newItem
//     this.age = newItem.age
// }

// const tree = new Item('tree');

// Principle 4

// code example for Explicit Binding

// function Item (newItem) {
//     this.name = newItem.name,
//     this.age = newItem.age
// }

// const sayName = function() {
//     console.log(`I am a ${this.name}, and I am ${this.age} years old!`);
// }

// const tree = {
//     name: 'tree',
//     age: 200
// };

// const bush = {
//     name: 'bush',
//     age: 15
// }

// console.log(tree);
// console.log(bush);
// sayName.call(tree);
// sayName.call(bush);