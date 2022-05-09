'use strict';
/*
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
*/
///////////////////////////////////////////////////////////////////////////////////////////
// 129. How Passing Arguments Works: Value vs. Reference

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

//javascript does not have passing by reference, only passing by value