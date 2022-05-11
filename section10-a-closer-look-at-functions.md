<h1>A closer look at functions</h1>

<a id='section0'></a>
<h2>Table of contents</h2>

+ [128. Default Parameters](#section1)
+ [129. How Passing Arguments Works: Value vs. Reference](#section2)
+ [130. First-Class and Higher-Order Functions](#section3)
+ [131. Functions Accepting Callback Functions](#section4)
+ [132. Functions Returning Functions](#section5)
+ [133. The call and apply Methods](#section6)

<a id='section1'></a>
<h3>128. Default Parameters</h3> 

[back to Index](#section0)
  

```js
'use strict';

const bookings = [];

const createBooking = function (flightNum, 
  numPassenger = 1, 
  price = 199 * numPassenger) {
  // ES5
  // numPassenger = numPassenger || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

```

<a id='section2'></a>
<h3>129. How Passing Arguments Works: Value vs. Reference</h3> 

[back to Index](#section0)
  

```js
const flight = 'LH234';
const jonas = {
  name: 'Jose de San Martin',
  passport: 23483738373
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name

  if(passenger.passport === 23483738373) {
    alert('Checked In')
  } else {
    alert('Wrong passport!')
  }
}

// checkIn(flight, jonas)
// console.log(flight);
// console.log(jonas);

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
}

newPassport(jonas)
checkIn(flight, jonas)
Stop


```

<a id='section3'></a>
<h3>130. First-Class and Higher-Order Functions</h3> 

[back to Index](#section0)
  

<img src="/images/first-class-vs-higher-order-functions.png" width="650" height="400" >

<a id='section4'></a>
<h3>131. Functions Accepting Callback Functions</h3> 

[back to Index](#section0)

```js
const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ')
}

// Higher-order-function
const transformer = function(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);

  console.log(`Trasformed by: ${fn.name}`);

}

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

const high5 = function() {
  console.log('😏');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

```

<a id='section5'></a>
<h3>132. Functions Returning Functions</h3> 

[back to Index](#section0)
  

```js

// 132. Functions Returning Functions


// it works because of something called a closure.
const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Hey');
greeterHey('Jonas'); // Hey Jonas
greeterHey('Steven'); // Hey Steven

greet('Hello')('Jonas'); // Hello Jonas

// ##############################################
// ########### muy buena!!! #####################
// ##############################################
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas')

```

<a id='section6'></a>
<h3>133. The call and apply Methods</h3> 

[back to Index](#section0)
  

```js

// #######################################################
// ########### Beautiful Chapter!!!! #####################
// ####################################################### 

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
  },
};

lufthansa.book(239, 'Mariano Moreno');
lufthansa.book(249, 'Manuel Belgrano');
console.log(lufthansa);



const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book

// call method
book.call(eurowings, 239, 'Mariano Moreno');
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 456, 'Pedro Picapiedra');
console.log(swiss);

// Apply method
// apply doesnt recibe a list of arguments but an array of the arguments
const flightData = [726, 'Profesor Girafales']
book.apply(swiss, flightData) // this apply method is not that used anymore in moder javascript because now there is a better way to do it.

// this is the better way
book.call(swiss, ...flightData)
 
