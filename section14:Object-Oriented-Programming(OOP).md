<h1>Working with arrays</h1>

<a id='section0'></a>
<h2>Table of contents</h2>

+ [206. What is Object-Oriented Programming?](#section1)
+ [207. OOP in JavaScript](#section2)
+ [208. Constructor Functions and the new Operator](#section3)
+ [209. Prototypes](#section4)
+ [210. Prototypal Inheritance and The Prototype Chain](#section5)
+ [212. Coding Challenge #1](#section6)
+ [213. ES6 Classes](#section7)
+ [214. Setters and Getters](#section8)
+ [152. The filter Method](#section9)
+ [Coding Challenge #2 and #3](#section10)
+ [157. The find Method](#section11)
+ [161. some and every](#section12)
+ [162. flat and flatMap](#section13)
+ [163. Sorting Arrays](#section14)
+ [164. More Ways of Creating and Filling Arrays](#section15)
+ [165. Summary: Which Array Method to Use?](#section16)


<a id='section1'></a>
<h3>206. What is Object-Oriented Programming?</h3> 

[back to Index](#section0)


<img src="https://github.com/thusspokedata/dev-JavaScript-From-Zero-to-Expert/blob/main/images/oop.png" width="900">

<img src="https://github.com/thusspokedata/dev-JavaScript-From-Zero-to-Expert/blob/main/images/classes.png" width="900"> 

<img src="https://github.com/thusspokedata/dev-JavaScript-From-Zero-to-Expert/blob/main/images/abstraction" width="900">

<img src="https://github.com/thusspokedata/dev-JavaScript-From-Zero-to-Expert/blob/main/images/encapsulation.png" width="900"> 

<img src="https://github.com/thusspokedata/dev-JavaScript-From-Zero-to-Expert/blob/main/images/inheritance.png" width="900">

<img src="https://github.com/thusspokedata/dev-JavaScript-From-Zero-to-Expert/blob/main/images/polymorphism.png" width="900"> 


<a id='section2'></a>
<h3>207. OOP in JavaScript</h3> 

[back to Index](#section0)

<img src="https://github.com/thusspokedata/dev-JavaScript-From-Zero-to-Expert/blob/main/images/prototypes.png" width="900">

<img src="https://github.com/thusspokedata/dev-JavaScript-From-Zero-to-Expert/blob/main/images/implementing-prototypal.png" width="900">

<a id='section3'></a>
<h3>208. Constructor Functions and the new Operator</h3> 

[back to Index](#section0)

```js 

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


```  

<a id='section4'></a>
<h3>209. Prototypes</h3> 

[back to Index](#section0)


```js

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

``` 

<a id='section5'></a>
<h3>210. Prototypal Inheritance and The Prototype Chain</h3> 

[back to Index](#section0)

<img src="https://github.com/thusspokedata/dev-JavaScript-From-Zero-to-Expert/blob/main/images/how-prototypal-inheritance.png" width="900">

<img src="https://github.com/thusspokedata/dev-JavaScript-From-Zero-to-Expert/blob/main/images/the-prototype-chain.png" width="900">


<a id='section6'></a>
<h3>212. Coding Challenge #1</h3> 

[back to Index](#section0)

```js
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
```


<a id='section7'></a>
<h3>213. ES6 Classes</h3> 

[back to Index](#section0)

```js 

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


```

<a id='section8'></a>
<h3>214. Setters and Getters</h3> 

[back to Index](#section0)

```js 

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


```

<a id='section9'></a>
<h3>216. Object.create</h3> 

[back to Index](#section0)


<img src="https://github.com/thusspokedata/dev-JavaScript-From-Zero-to-Expert/blob/main/images/how-object-create-works.png" width="900">
