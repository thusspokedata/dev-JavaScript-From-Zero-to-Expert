```js

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // "2037-11-19T14:23:00.000Z"
console.log(future.getTime()); // 2142253380000


const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1); // 10


const future2 = new Date(2037, 08, 09, 15, 23);
const day = `${future2.getDate()}`.padStart(2, 0); // "09"
const month = `${future2.getMonth()}`.padStart(2, 0); // "08"
const year = future2.getFullYear();  // "2037"
console.log(`${day}/${month}/${year}`) // "09/09/2037"

```

```js
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


///////////////////////////////////////
// Converting and Checking Numbers
console.log(23 === 23.0);
// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
// Conversion
console.log(Number('23'));
console.log(+'23');
// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));
console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));
// console.log(parseFloat('  2.5rem  '));
// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));
// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
///////////////////////////////////////
// Math and Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));
console.log(Math.min(5, 18, 23, 11, 2));
console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));
// Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));
console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));
console.log(Math.trunc(23.3));
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));
// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));
///////////////////////////////////////
// The Remainder Operator
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1
console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2
console.log(6 % 2);
console.log(6 / 2);
console.log(7 % 2);
console.log(7 / 2);
const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
///////////////////////////////////////
// Numeric Separators
// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);
const price = 345_99;
console.log(price);
const transferFee1 = 15_00;
const transferFee2 = 1_500;
const PI = 3.1415;
console.log(PI);
console.log(Number('230_000'));
console.log(parseInt('230_000'));
///////////////////////////////////////
// Working with BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));
// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n));
const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));
// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');
console.log(huge + ' is REALLY big!!!');
// Divisions
console.log(11n / 3n);
console.log(10 / 3);
///////////////////////////////////////
// Creating Dates
// Create a date
const now = new Date();
console.log(now);
console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(2142256980000));
console.log(Date.now());
future.setFullYear(2040);
console.log(future);
///////////////////////////////////////
// Operations With Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
///////////////////////////////////////
// Internationalizing Numbers (Intl)
const num = 3884764.23;
const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};
console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
///////////////////////////////////////
// Timers
// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000)



