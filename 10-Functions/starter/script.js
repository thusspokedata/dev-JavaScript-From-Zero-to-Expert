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



///////////////////////////////////////////////////////////////////////////////////////////
// 131. Functions Accepting Callback Functions

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


/////////////////////////////////////////////////////////////////////////////////////
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

greetArr('Hi')('Jonas');


/////////////////////////////////////////////////////////////////////////////////////
// 133. The call and apply Methods

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
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
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

const book = lufthansa.book;

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
const flightData = [726, 'Profesor Girafales'];
book.apply(swiss, flightData); // this apply method is not that used anymore in moder javascript because now there is a better way to do it.

// this is the better way
book.call(swiss, ...flightData);

//////////////////////////////////////////////////////////////////////////////////////////
// 134. The bind Method

const bookEW = book.bind(eurowings); // Pequenio Saltamontes booked a seat on Eurowings flight EW23
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Pequenio Saltamontes');

console.log('-----------------------');
// 23 is predefined
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Pablo Marmol'); // Pablo Marmol booked a seat on Eurowings flight EW23

console.log('-----------------------');
// another way to use bin is when we have object together with even listeners
//With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// Partial application 
const addTax = (rate, value) => value + value*rate;
console.log(addTax(.1,200));

const addVAT = addTax.bind(null, .23);
// addVAT = value => value + value*0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) {
  return function(value) {
    return value + value*rate;
  }
}

const addVAT2 = addTaxRate(0.23)
console.log(addVAT2(100));
console.log(addVAT(23));


/////////////////////////////////////////////////////////////////////////////////////
// 135. Coding Challenge #1

###############################################################################
### this challenge is really good to learn about promp ########################
###############################################################################

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write the option number)`
      )
    );
    console.log(answer);

    // Register Answer
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    }else if (type === 'string') {
      // Poll results are 12,2,4,1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
};
// poll.registerNewAnswer();
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.displayResults.call({answers: [5,2,3]}, 'string')




/////////////////////////////////////////////////////////////////////////////////////
// 136. Immediately Invoked Function Expressions (IIFE)

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
// the parentesis transform the statement to an expression
(function() {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();


// why was this pattern actually invented? Well, we already know that functions create scopes, And what's important here is that one scope does not have access
// to variables from an inner scope.
// the scope chain only works the other way around. So the inner scope would have access to anything defined outside, here in the global scope.
// But the other way around, the global scope does not have access to anything, that is inside of a scope.
// We also say that this data is encapsulated. So for example, this is private here is encapsulated inside of this function scope, that's created here.
// And data encapsulation and data privacy are extremely important concepts in programming.
// So many times we actually need to protect our variables, from being accidentally overwritten by some other parts of the program. Or even with external scripts or libraries.

{
  const isPrivate = 23;
  var notPrivate = 46;
}

console.log(notPrivate);
// And this is the reason why now in modern JavaScript.
// Immediately Invoked Function Expressions are not that used anymore. Because if all we want is to create a new scope for data privacy. All we need to do,
// is to just create a block like this, right?
// There's no need to creating a function to create a new scope. Unless of course, we want to use var for our variables.


/////////////////////////////////////////////////////////////////////////////////////
// 137. Closures

const secureBooking = function() {
  let passengerCount = 0
  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker)



/////////////////////////////////////////////////////////////////////////////////////
// 138. More Closure Examples

// Example 1
let f;

const g = function() {
  const a= 23;
  f = function(){
    console.log(a*2);
  }
}
const h = function() {
  const b= 777;
  f = function(){
    console.log(b*2);
  }
}


g();
f();
console.dir(f);
// Re-assigning f function
h();
f();
console.dir(f);

// Example 2

const boardPassenger = function(n, wait) {
  const perGroup = n/ 3;

  setTimeout(function() {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  },wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 1000;
boardPassenger(180, 3)

*/

/////////////////////////////////////////////////////////////////////////////////////
// 139. Coding Challenge #1

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function(){
    header.style.color ='blue'
  })
})();