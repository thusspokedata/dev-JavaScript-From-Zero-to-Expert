<h1>Working with arrays</h1>

<a id='section0'></a>
<h2>Table of contents</h2>

+ [206. What is Object-Oriented Programming?](#section1)
+ [207. OOP in JavaScript](#section2)
+ [208. Constructor Functions and the new Operator](#section3)
+ [146. PROJECT: "Bankist" App](#section4)
+ [210. Prototypal Inheritance and The Prototype Chain](#section5)
+ [148. Coding Challenge #1](#section6)
+ [149. Data Transformations: map, filter, reduce](#section7)
+ [150. Data map method](#section8)
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
