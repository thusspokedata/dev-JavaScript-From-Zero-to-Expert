<h1>Working with arrays</h1>

<a id='section0'></a>
<h2>Table of contents</h2>

+ [142. Simple Array Methods <b>SLICE SPLICE REVERSE CONCAT JOIN</b>](#section1)
+ [143. The new at Method <b>AT</b>](#section2)
+ [145. forEach With Maps and Sets](#section3)
+ [146. PROJECT: "Bankist" App](#section4)
+ [147. Creating DOM Elements](#section5)
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

<img src="https://github.com/thusspokedata/dev-JavaScript-From-Zero-to-Expert/blob/main/images/array_to_use.png" width="900">

<a id='section1'></a>
<h3>128. Default Parameters</h3> 

[back to Index](#section0)


```

'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

```

<a id='section1'></a>
<h3>142. Simple Array Methods <b>SLICE SPLICE REVERSE CONCAT JOIN</b></h3> 

[back to Index](#section0)

```js

// SLICE
// let arr = "abcde".split('')
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// SPLICE // it takes off the values of the variable
console.log(arr.splice(2)); // ['c', 'd', 'e']
console.log(arr); // ['a', 'b']
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(-1)); // ['e']
console.log(arr); // ['a', 'b', 'c', 'd']
console.log(arr.splice(1,2)); // ['b', 'c']
console.log(arr); // ['a', 'd']

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = 'jihgf'.split(''); 
console.log(arr2); // ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

// CONCAT
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// JOIN 
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

```

<a id='section2'></a>
<h3>143. The new at Method <b>AT</b></h3> 

[back to Index](#section0)

```js

const arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)) // 23 /////////// ATENCION- ESTO ES NUEVO! /////////////////

// getting last array element
console.log(arr[arr.length -1]); // 64
console.log(arr.slice(-1)[0]); // 64 // we get an array [64] and then we extract the first value using [0]
console.log(arr.at(-1)) // 64
console.log(arr.at(-2)) // 11

console.log('Jonas'.at(0)); // J
console.log('Jonas'.at(-1)); // s

```
<a id='section2'></a>
<h3>144. Looping Arrays: forEach</h3> 

[back to Index](#section0)

```js

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`); // abs = absolute
  }
}

console.log('------FOREACH-----------');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`); // abs = absolute
  }
});

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`); // abs = absolute
  }
}

console.log('------FOREACH-----------');
movements.forEach(function (mov, i, arr) {
  // the order is important: the first element is the current element, the second the current index and the third one always the entire array
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`); // abs = absolute
  }
});

// And this is how we loop over arrays with the forEach method.
// Now when should you use forEach and when should you use the for of loop.
// Well one fundamental difference between the two of them is that you cannot break out of a forEach loop.
// So the continue and break statements do not work in a forEach loop at all.
// So instead, forEach will always loop over the entire array and there is nothing that you can do about it.
// So if you really need to break out of a loop then you have to keep using the for of loop, but other than that it really comes down to your personal preference.
// Just like so many other things in JavaScript.

```

<a id='section3'></a>
<h3>145. forEach With Maps and Sets</h3> 

[back to Index](#section0)

```js

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// MAP
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// I got:
// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling

// SET
const correnciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(correnciesUnique); // Set(3) {'USD', 'GBP', 'EUR'}
correnciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`); // USD: USD GBP: GBP EUR: EUR // that means that key and value are the same, key doesnt make sense
});

```

<a id='section4'></a>
<h3>146. PROJECT: "Bankist" App</h3> 

[back to Index](#section0)

<img src="https://github.com/antonio-datahack/dev-JavaScript-From-Zero-to-Expert/blob/main/images/bankist-flowchart.png"/>

<a id='section5'></a>
<h3>147. Creating DOM Elements</h3> 

[back to Index](#section0)

```js

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // this delete the default html text
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);


```
<a id='section6'></a>
<h3>148. Coding Challenge #1</h3> 

[back to Index](#section0)

```js

let juliaData1 = [3, 5, 2, 12, 7];
let kateData1 = [4, 1, 15, 8, 3];

let juliaData2 = [9, 16, 6, 8, 3];
let kateData2 = [10, 5, 6, 1, 4];

let juliaKateData = [];

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaDataCorrected = dogsJulia.slice(1, -2);
  juliaKateData = juliaDataCorrected.concat(dogsKate);
  console.log(juliaKateData);
};
checkDogs(juliaData1, kateData1);

// const checkDogs2 = function (dogsJulia, dogsKate) {
//   juliaData1 = dogsJulia.slice(1, -2);
//   let juliaKateData1 = [...juliaData1, ...dogsKate];
//   console.log(juliaKateData1);
// };
// juliaData1 = [3, 5, 2, 12, 7];
// checkDogs2(juliaData1, kateData1);
juliaKateData.forEach(function (age, i) {
  // the order is important: the first element is the current element, the second the current index and the third one always the entire array
  if (age >= 3) {
    console.log(`Dog number ${i + 1} is a dog and is ${age} years old`);
  } else {
    console.log(`Dog number ${i + 1} is still a puppy 🐶`); // abs = absolute
  }
});


```
<a id='section7'></a>
<h3>149. Data Transformations: map, filter, reduce</h3> 

[back to Index](#section0)

```js


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// here in the map method, we use a function to solve this problem of creating a new array.
// this is more in line with functional programming.
const movementsUSD = movements.map(function (mov) {
  return Math.round(mov * eurToUsd); // [220, 495, -440, 3300, -715, -143, 77, 1430]
  // return 23; // [23, 23, 23, 23, 23, 23, 23, 23]
});

console.log(movements);
console.log(movementsUSD);

// while here we simply loop over one array and then manually create a new one.
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

console.log(movementsUSDfor);

// ############################################################
// ########### ARRAY FUNTION !!!!! ############################
// ############################################################
console.log('---------ARRAY FUNTION--------');
const movementsUSDarray = movements.map(mov => Math.round(mov * eurToUsd));
console.log(movementsUSDarray);

const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdraw ${Math.abs(mov)}`; // abs = absolute
  }
});
console.log(movementsDescriptions);

// ############################################################
// ########### ARRAY FUNTION !!!!! ############################
// ############################################################
const movementsDescriptionsArray = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptionsArray);

```
<a id='section8'></a>
<h3>150. Data map method</h3> 

[back to Index](#section0)

```js

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// here in the map method, we use a function to solve this problem of creating a new array.
// this is more in line with functional programming.
const movementsUSD = movements.map(function (mov) {
  return Math.round(mov * eurToUsd); // [220, 495, -440, 3300, -715, -143, 77, 1430]
  // return 23; // [23, 23, 23, 23, 23, 23, 23, 23]
});

console.log(movements);
console.log(movementsUSD);

// while here we simply loop over one array and then manually create a new one.
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

console.log(movementsUSDfor);

// ############################################################
// ########### ARRAY FUNTION !!!!! ############################
// ############################################################
console.log('---------ARRAY FUNTION--------');
const movementsUSDarray = movements.map(mov => Math.round(mov * eurToUsd));
console.log(movementsUSDarray);

const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdraw ${Math.abs(mov)}`; // abs = absolute
  }
});
console.log(movementsDescriptions);

// ############################################################
// ########### ARRAY FUNTION !!!!! ############################
// ############################################################
const movementsDescriptionsArray = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptionsArray);

```
<a id='section9'></a>
<h3>152. The filter Method</h3> 

[back to Index](#section0)

```js

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const deposits = movements.filter(function(mov){
  return mov > 0;
})

console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const  mov of movements) if  (mov > 0) depositsFor.push(mov);

console.log(depositsFor);

const withdraws = movements.filter(mov => mov < 0);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration number ${i}: ${acc}`)
//   return acc + cur;
// }, 0); // 0 is the initial value of the accumulator

//#############################################################
//############ ARRAY IS BEAUTIFUL!!! ##########################
//#############################################################

const balance = movements.reduce((acc, cur) => acc + cur, 0);


console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2)

// Maximun Value
const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0])

console.log(`resultado es ${max}`)

```
<a id='section10'></a>
<h3>Coding Challenge #2 and #3</h3> 

[back to Index](#section0)

```js

const ages = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4]
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  const avg = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  return avg;
};

console.log(calcAverageHumanAge(ages));

//#############################################################
//############ ARRAY IS BEAUTIFUL!!! ##########################
//#############################################################
const calcAverageHumanAgeFinal = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAgeFinal(ages);
const avg2 = calcAverageHumanAgeFinal(ages2);
console.log(avg1, avg2)

const eurToUsd = 1.1;

// para que esto funcione, siempre tiene q devolver un array.
// PIPELINE
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    console.log(arr); // if we want to see that result of only this operation, we can check the current array
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositUSD);

```
<a id='section11'></a>
<h3>157. The find Method</h3> 

[back to Index](#section0)

```js

// The Find method is a bit similar to the Filter method, but there are two fundamental differences.
// First Filter returns all the elements that match the condition while the Find method
// only returns the first one and second and even more important, the Filter method returns
// a new array while Find only returns the element itself and not an array.

const firstWithdrawal = movements.find(mov => mov < 0)
console.log(movements)
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account)


```
<a id='section12'></a>
<h3>161. some and every</h3> 

[back to Index](#section0)

```js

// EQUALITY
console.log(movements.includes(-130)); // true

// CONDITION
console.log(movements.some(mov => mov === -130)); // true
const anyDeposits = movements.some(mov => mov > 5000); // false
console.log(anyDeposits);

// EVERY 
console.log(movements.every(mov => mov > 0)); // every one has to be bigger than 0 // False
console.log(account4.movements.every(mov => mov > 0)); // true

// separate callbak
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); // [200, 450, 3000, 70, 1300]

```
<a id='section13'></a>
<h3>162. flat and flatMap</h3> 

[back to Index](#section0)

```js

//#############################################################
//######################### LINDA!!! ##########################
//#############################################################

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [Array(2), 3, 4, Array(2), 7, 8]
console.log(arrDeep.flat().flat()); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrDeep.flat(2)); // better if I write how deep I want to go // [1, 2, 3, 4, 5, 6, 7, 8]

// Toda esta funcion se resume en la de !!!!!!overalBalance2!!!!!!!!!!
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements); // [Array(8), Array(8), Array(8), Array(5)]
// const allMovements = accountMovements.flat();
// console.log(allMovements); // [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance); // 17840

//#############################################################
//################amo esta funcion!! ##########################
//#############################################################
// flat
const overalBalance2 = accounts
  .map(acc => acc.movements) // first we map
  .flat() // then we flat the function
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2); // 17840

//#############################################################
//################todavia mas bella!!##########################
//#############################################################
// flatMap
const overalBalanceFinal = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalanceFinal); // 17840

```
<a id='section14'></a>
<h3>163. Sorting Arrays</h3> 

[back to Index](#section0)

```js

// strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // [ "Adam", "Jonas", "Martha", "Zach" ] // this mutate the original array
console.log(owners); //  [ "Adam", "Jonas", "Martha", "Zach" ]

//numbers
console.log(movements); // [ 200, 450, -400, 3000, -650, -130, 70, 1300 ]
console.log(movements.sort()); // [ -130, -400, -650, 1300, 200, 3000, 450, 70 ] // it converts everything to string and then sort it
console.log(movements); // [ -130, -400, -650, 1300, 200, 3000, 450, 70 ] // it doesnt work properly

// ascending
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
movements.sort((a, b) => a - b); // UNA LOCURA!!!!!!##################
console.log(movements); // [ -650, -400, -130, 70, 200, 450, 1300, 3000 ] //Perfect!!!!

// descending
// movements.sort((a, b) => {
//   if (a < b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);
movements.sort((a, b) => (a < b ? 1 : -1)); // BELLO ####################
console.log(movements);


```
<a id='section15'></a>
<h3>164. More Ways of Creating and Filling Arrays</h3> 

[back to Index](#section0)

```js

console.log([1, 2, 3, 4, 5, 6, 7]); // [1, 2, 3, 4, 5, 6, 7]
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // [1, 2, 3, 4, 5, 6, 7]

// Empty arrrays + fill method
const x = new Array(7);
console.log(x); // [empty × 7]
console.log(x.map(() => 5)); // [empty × 7]

// x.fill(1);
// console.log(x); //  [1, 1, 1, 1, 1, 1, 1]

// x.fill(1, 3);
// console.log(x); // [empty × 3, 1, 1, 1, 1]

x.fill(1, 3, 5);
console.log(x); // [empty × 3, 1, 1, empty × 2]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 4, 6);
console.log(arr); // [1, 2, 3, 4, 23, 23, 7]

//#############################################################
//################interesante !!##########################
//#############################################################

// Array from
const y = Array.from({ length: 7 }, () => 2);
console.log(y); // [2, 2, 2, 2, 2, 2, 2]

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z); // [1, 2, 3, 4, 5, 6, 7]

const k = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(k); // [1, 2, 3, 4, 5, 6, 7]

const j = Array.from({ length: 100 }, _ => Math.floor(Math.random() * 100));
console.log(j); // [1, 2, 3, 4, 5, 6, 7]


// no se q hice q esto no me funcionó!!!!!!
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
  const movementsUI2 = [...document.querySelectorAll('.movements__value')]
});

```
<a id='section16'></a>
<h3>165. Summary: Which Array Method to Use?</h3> 

[back to Index](#section0)

<img src="https://github.com/thusspokedata/dev-JavaScript-From-Zero-to-Expert/blob/main/images/array_to_use.png" width="900">

