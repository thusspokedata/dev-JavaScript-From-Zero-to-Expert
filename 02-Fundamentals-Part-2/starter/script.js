//////////////////////////////////////////////////////////////////////
// ACTIVATING STRICT MODE

"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = 'Audio';
// const private = 534;
// const if = 'yes'



/////////////////////////////////////////////////////////////////////////
// FUNCTIONS

function logger() {
  console.log('My name is Jonas');
}

// calling / running // invoking functions
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(3, 2);
const appleJuice = fruitProcessor(3, 2);
console.log(appleJuice);
console.log(fruitProcessor(3, 2));

const appleOrangeJuice = fruitProcessor(2,4)
console.log(appleOrangeJuice);


/////////////////////////////////////////////////////////////////////////
// FUNCTIONS DECLARATION VS. EXPRESSIONS

// Function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge1(1980);
console.log(calcAge1(1980));
console.log(age1);

// Function expression
const calcAge2 = function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2)

// la diferencia entre declaracion y expresion es q a la declaracion la puedo hacer despues de haberla llamado, 
// y a la expresion tengo q llamarla luego de haberla creado


////////////////////////////////////////////////////////////////////////////
// ARROW FUNCTIONS

// const calcAge2 = function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }
// Arroy Function
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} needs ${retirement} years to retire`
}

console.log(yearsUntilRetirement(1995, 'Antonio'));
console.log(yearsUntilRetirement(1970, 'Pedro'))


///////////////////////////////////////////////////////////////////////////
// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2,3));



////////////////////////////////////////////////////////////////////////////////
// REVIEWING FUNCTIONS

const calcAge = function (year) {
  return 2022 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear)
  const retirement = 65 - age;

  if(retirement > 0){
    console.log(`${firstName} needs ${retirement} years to retire`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1951, 'Mike'));

//////////////////////////////////////////////////////////////////////////////////
// challenge 1

const calcAverage = (a, b, c) => (a + b + c) / 3;

const checkWinner = function(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolhins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("no team wins")
  }
}

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));



//////////////////////////////////////////////////////////////////////////////
// 39. INTRODUCTION TO ARRAYS

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends =['Michael', 'Steven', 'Peter']
console.log(friends);

const years = new Array(1991,1984, 2008, 2020);


console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay'; // I can change the value because only primitive values are immutable, an Array is not a primitive value.
console.log(friends); 

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2022 -1991, 'teacher', friends];
console.log(jonas);


const calcAge2 = function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const years2 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge2(years2[0]);
const age2 = calcAge2(years2[0]);
const age3 = calcAge2(years2[0]);
console.log(age1,age2,age3)
const ages = [calcAge2(years2[0]), calcAge2(years2[1]),calcAge2(years2[2])]
console.log(ages)



/////////////////////////////////////////////////////////////////////////////////
//  40. Basic Array Operations (Methods)

const friends =['Michael', 'Steven', 'Peter'];

// Add elements
const new_Length = friends.push('Jay');
console.log(friends);
console.log(new_Length);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
 const popped = friends.pop(); 
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
  console.log('You have a friend called Peter')
} else {
  console.log("You dont have a friend called Peter")
}



/////////////////////////////////////////////////////////////////////////////
// challenge 2

const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
  } 


// OTRA FORMA MUY COOL
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const bills = [125,555,44]

const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])]
const totals = [(tips[0]+bills[0]), (tips[1]+bills[1]),(tips[2]+bills[2])]
console.log(bills, tips, totals);



////////////////////////////////////////////////////////////////////////////////////////////
// 42. Introduction to Objects

const jonasArray = [
  'Jonas',
  'Schmedmann',
  2022 -1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
]

const jonas = {
  firstName: 'Jonas', 
  lastName: 'Schmedmann',
  age: 2022 -1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas[interestedIn]);

// if(jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }

if(jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  const interestedIn2 = prompt('Wrong request! Choose between firstName, lastName, age, job, and friends');
  console.log(jonas[interestedIn2]);
}

jonas.location = 'Portugal';
jonas['Twitter'] = '@jonasschmedtman';
console.log(jonas);


console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

*/

/////////////////////////////////////////////////////////////////////////////////////////////////
// 44. Object Methods


const jonas = {
  firstName: 'Jonas', 
  lastName: 'Schmedmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function(birthYeah) {
  //   return 2022 - birthYeah
  // }

  // calcAge: function() {
  //   console.log(this) // 'this' point to jonas
  //   return 2022 - this.birthYeah
  // }

  calcAge: function() {
    this.age = 2022 - this.birthYeah
    return this.age;
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas['calcAge'](1991));