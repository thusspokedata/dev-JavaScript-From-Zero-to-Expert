<h1>A closer look at functions</h1>

<a id='section0'></a>
<h2>Table of contents</h2>

+ [128. Default Parameters](#section1)

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
