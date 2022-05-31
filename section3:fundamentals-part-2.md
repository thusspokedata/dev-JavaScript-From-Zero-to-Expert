<h1>Javascript-fundamentals- part 2</h1>

<a id='section0'></a>
<h2>Table of contents</h2>

+ [32. Activating Strict Mode](#section1)
+ [33. Functions](#section2)
+ [34. Function Declarations vs. Expressions](#section3)
+ [35. Arrow Functions](#section4)
+ [36. Functions Calling Other Functions](#section5)
+ [37. Reviewing Functions](#section6)
+ [38. Coding Challenge #1(#section7)
+ [39. Introduction to Arrays](#section8)
+ [40. Basic Array Operations (Methods)](#section9)
+ [41. Coding Challenge #2](#section10)
+ [42. Introduction to Objects](#section11)
+ [44. Object Methods](#section12)
+ [45. Coding Challenge #3](#section13)
+ [46. Iteration: The for Loop](#section14)
+ [47. Looping Arrays, Breaking and Continuing](#section15)
+ [48. Looping Backwards and Loops in Loops](#section16)
+ [49. The while Loop](#section16)


<a id='section1'></a>
<h3>32. Activating Strict Mode</h3> 

[back to Index](#section0)


```js 


"use strict";


let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");
// const interface = 'Audio';
// const private = 534;
// const if = 'yes'
  

```
  
<a id='section2'></a>
<h3>33. Functions</h3> 

[back to Index](#section0)


```js 

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


```
  
<a id='section3'></a>
<h3>34. Function Declarations vs. Expressions</h3> 

[back to Index](#section0)


```js 

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

```
  
<a id='section4'></a>
<h3>35. Arrow Functions</h3> 

[back to Index](#section0)

```js 

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

```
  
<a id='section5'></a>
<h3>36. Functions Calling Other Functions</h3> 

[back to Index](#section0)

```js 

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

```
  
<a id='section6'></a>
<h3>37. Reviewing Functions</h3> 

[back to Index](#section0)

```js 

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

```
  
<a id='section7'></a>
<h3>38. Coding Challenge #1</h3> 

[back to Index](#section0)

```js 

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

```
  
<a id='section8'></a>
<h3>39. Introduction to Arrays</h3> 

[back to Index](#section0)

```js 

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

```
  
<a id='section9'></a>
<h3>40. Basic Array Operations (Methods)</h3> 

[back to Index](#section0)

```js

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

```
  
<a id='section10'></a>
<h3>41. Coding Challenge #2</h3> 

[back to Index](#section0)

```js

const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
  } 
// OTRA FORMA MUY COOL
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const bills = [125,555,44]
const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])]
const totals = [(tips[0]+bills[0]), (tips[1]+bills[1]),(tips[2]+bills[2])]
console.log(bills, tips, totals);

```
  
<a id='section11'></a>
<h3>42. Introduction to Objects</h3> 

[back to Index](#section0)

```js

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


```
  
<a id='section12'></a>
<h3>44. Object Methods</h3> 

[back to Index](#section0)

```js

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
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'not'} driver's license.`
  }
};
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
// console.log(jonas['calcAge'](1991));
// CHALLENGE
// 'Jonas is a 46-years old teacher'
console.log(jonas.getSummary());

```
  
<a id='section13'></a>
<h3>45. Coding Challenge #3</h3> 

[back to Index](#section0)

```js

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 7
const markMiller = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = this.mass / (this.height ** 2)
    return this.BMI
  }
};
const johnSmith = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.mass / (this.height ** 2)
    return this.BMI
  }
};
console.log(`${markMiller.calcBMI() > johnSmith.calcBMI() ? 'Mark' : 'John'}'s BMI (${(markMiller.BMI > johnSmith.BMI ? markMiller.BMI : johnSmith.BMI).toFixed(1)}) is higher than  ${markMiller.BMI < johnSmith.BMI ? 'Mark' : 'John'}'s (${(markMiller.BMI < johnSmith.BMI ? markMiller.BMI : johnSmith.BMI).toFixed(1)})`)


```
  
<a id='section14'></a>
<h3>46. Iteration: The for Loop</h3> 

[back to Index](#section0)

```js

// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
  console.log('Lifting weights repetitions ' + rep)
}


```
  
<a id='section15'></a>
<h3>47. Looping Arrays, Breaking and Continuing</h3> 

[back to Index](#section0)

```js

const jonas = [
  'Jonas',
  'Schmedmann',
  2022 -1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
]
const types = [];
for(let i = 0; i < jonas.length; i++) {
  // reading types jonas array
  console.log(jonas[i], typeof jonas[i]);
  // Filling types array
  //types[i] = typeof jonas[1];
  types.push(typeof jonas[i])
}
console.log(types)
const years = [1991, 2007, 1969, 2020];
const ages = [];
for(let i=0; i < years.length; i++) {
  ages.push(2022-years[i])
}
console.log(ages)
// continue and break
console.log('--- ONLY STRING ---');
for(let i = 0; i < jonas.length; i++) {
  if(typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}
console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i < jonas.length; i++) {
  if(typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}


```
  
<a id='section16'></a>
<h3>48. Looping Backwards and Loops in Loops</h3> 

[back to Index](#section0)

```js

const jonas = [
  'Jonas',
  'Schmedmann',
  2022 -1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
]
for(let i = jonas.length -1; i >= 0; i--) {
  // reading types jonas array
  console.log(i, jonas[i], typeof jonas[i]);
  // Filling types array
  //types[i] = typeof jonas[1];
}
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------------Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++)
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
}
```
  
<a id='section17'></a>
<h3>49. The while Loop</h3> 

[back to Index](#section0)

```js

// for (let rep = 1; rep <= 10; rep++){
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(` while: Lifting weights repetition ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 7) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}


