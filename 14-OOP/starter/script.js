'use strict';
/*
/////////////////////////////////////////////////////////////////////
// 208. Constructor Functions and the new Operator

// The only difference between a regular function, and a function that we call constructor function,
// is that we call a constructor function with the "new" operator.
*/
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this, never create a method inside of a constructor function. It would be terrible for the performance of our code!
  // this.calcAge = function() {
  //   console.log(2022 - this.birthYear)
  // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}

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

// this is in relation with chapter 215 (static methods)
Person.hey = function () {
  console.log('Hey there!!👍🏼');
};
Person.hey(); // Hey there!!👍🏼
// jonas.hey(); // jonas is not defined

// Note that function constructors are not really a feature of the JavaScript language. Instead, they are simply a pattern that has been developed

////////////////////////////////////////////////////////////////////////////////
// 209. Prototypes

console.log(Person.prototype); // {constructor: ƒ}

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
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

Person.prototype.species = 'Homo Sapiens';
console.log(matilda, jack); // Person {firstName: 'Matilda', birthYear: 2017}birthYear: 2017firstName: "Matilda"[[Prototype]]: ObjectcalcAge: ƒ ()species: "Homo Sapiens"constructor: ƒ (firstName, birthYear)[[Prototype]]: Object Person {firstName: 'Jack', birthYear: 1975}
console.log(matilda.species, jack.species); // Homo Sapiens Homo Sapiens

// So own properties are only the ones that are declared directly on the object itself. So, not including the inherited properties.
console.log(matilda);
console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

console.log(jonas.__proto__); // {species: 'Homo Sapiens', calcAge: ƒ, constructor: ƒ}
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(jonas.__proto__.__proto__.__proto__); // null -> that's because object.prototype is usually the top of the scope chain.

console.log(Person.prototype.constructor); // we get the function itself

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__); // [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // [3, 6, 4, 5, 9]

const h1 = document.querySelector('h1');

////////////////////////////////////////////////////////////////////////////////
// 212. Coding Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.calcSpeed = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.calcBrake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BWM', 120);
const mercedes = new Car('Mercedes', 95);
bmw.calcSpeed(); // 130
bmw.calcSpeed(); // 140
mercedes.calcSpeed(); // 105
mercedes.calcSpeed(); // 115

bmw.calcBrake(); // 135

////////////////////////////////////////////////////////////////////////////////
// 213. ES6 Classes

// class expression
// const PersonCl = class {};

//#######################################################
//########### esto es hermoso!!!!!!!#####################
//#######################################################
// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance Method!!!!!
  //Now, what's important to understand here is that all of these methods that we write in the class,
  // so outside of the constructor will be on the prototype of the objects.
  // And not on the objects themselves.
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  greet() {
    console.log(`hey ${this.firstName}`);
  }
  get age() {
    return 2022 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a fullname`);
  }

  get fullName() {
    return this._fullName;
  }
  // static method!!!!!!!
  static hey() {
    console.log('Hey there!!👍🏼');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Nieva', 1996);
console.log(jessica); // PersonCl {firstName: 'Jessica', birthYear: 1996}
jessica.calcAge(); // 26
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`);
// };
jessica.greet();
const walter = new PersonCl('walter carrizo', 1977);
// 1. Classes are not hoisted
// 2. Classes are first class citizen
// 3. Classes are executed in strict mode

//////////////////////////////////////////////////////////////////////
// 214. Setters and Getters

// Getters and setters are basically functions that get and set a value so just as the name says,
// but on the outside they still look like regular properties.

const account = {
  owner: 'jonas',
  movements: [200, -130, 300, 500],

  // And then to transform this into a getter we simply prepend the keyword get.
  // So this can be very useful when we want to read something as a property, but still need to do some calculations before.
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // set latest(mov)
  //   this.movements.push(mov)
};
console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

///////////////////////////////////////////////////////////////////////
// 215. Static Methods

// PersonCl.hey(); // apunta a la clase entera, muestra la funcion

// So keep in mind that these static methods are not available on the instances, and sometimes they are still useful to implement
// some kind of helper function about a class or about a constructor function.

///////////////////////////////////////////////////////////////////////
// 216. Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); // 35

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979); // This is just a manual way of basically initializing the object.
sarah.calcAge(); // 58
