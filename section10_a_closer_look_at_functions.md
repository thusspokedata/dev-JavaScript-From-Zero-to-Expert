<h1>A closer look at functions</h1>

<a id='section0'></a>
<h2>Table of contents</h2>

+ [128. Default Parameters](#section1)
+ [129. How Passing Arguments Works: Value vs. Reference](#section2)
+ [130. First-Class and Higher-Order Functions](#section3)

<a id='section1'></a>
<h2>128. Default Parameters</h2> 

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
<h2>129. How Passing Arguments Works: Value vs. Reference</h2> 

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

<a id='section2'></a>
<h2>130. First-Class and Higher-Order Functions</h2> 

[back to Index](#section0)
  

<img src="/images/first-class-vs-higher-order-functions.png" width="650" height="400" >
