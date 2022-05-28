'use strict';

/////////////////////////////////////////////////////////////////////
// 208. Constructor Functions and the new Operator

// The only difference between a regular function, and a function that we call constructor function,
// is that we call a constructor function with the "new" operator.

const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear

  // never do this, never create a method inside of a constructor function. It would be terrible for the performance of our code!
  // this.calcAge = function() {
  //   console.log(2022 - this.birthYear)
  // }
};

const jonas = new Person('Jonas', 1991)
console.log(jonas) // Person {firstName: 'Jonas', birthYear: 1991}

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017); 
const jack = new Person('Jack', 1975);
console.log(matilda, jack); // Person {firstName: 'Matilda', birthYear: 2017} , Person {firstName: 'Jack', birthYear: 1975}

// const jay ="Jay"
// console.log(jay instanceof Person); // false
console.log(jonas instanceof Person); // true


// Note that function constructors are not really a feature of the JavaScript language. Instead, they are simply a pattern that has been developed

////////////////////////////////////////////////////////////////////////////////
// 209. Prototypes

console.log(Person.prototype); // {constructor: ƒ}

Person.prototype.calcAge = function() {
   console.log(2022 - this.birthYear)
};
// we attached it to every single object.
jonas.calcAge(); // 31

// each object has a special property called a __proto__.
console.log(jonas.__proto__); // {calcAge: ƒ, constructor: ƒ}
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// .prototypeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(matilda, jack);  // Person {firstName: 'Matilda', birthYear: 2017}birthYear: 2017firstName: "Matilda"[[Prototype]]: ObjectcalcAge: ƒ ()species: "Homo Sapiens"constructor: ƒ (firstName, birthYear)[[Prototype]]: Object Person {firstName: 'Jack', birthYear: 1975}
console.log(matilda.species, jack.species); // Homo Sapiens Homo Sapiens

// So own properties are only the ones that are declared directly on the object itself. So, not including the inherited properties.
console.log(matilda)
console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false


