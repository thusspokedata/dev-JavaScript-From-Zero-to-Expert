<h1>Javascript Fundamentals-part 1</h1>

<a id='section0'></a>
<h2>Table of contents</h2>

+ [10. Values and Variables](#section1)
+ [12. Data Types](#section2)
+ [13. let, const and var](#section3)
+ [14. Basic Operators](#section4)
+ [15. Operator Precedence](#section5)
+ [16. Coding Challenge #1](#section6)
+ [17. Strings and Template Literals](#section7)
+ [18. Taking Decisions: if / else Statements](#section8)
+ [19. Coding Challenge](#section9)
+ [20. Type Conversion and Coercion](#section10)
+ [21. Truthy and Falsy Values](#section11)
+ [22. Equality Operators: == vs. ===](#section12)
+ [23. Boolean Logic](#section13)
+ [24. Logical Operators](#section14)
+ [25. Coding Challenge #3](#section15)
+ [26. The switch Statement](#section16)
+ [27. Statements and Expressions](#section17)
+ [28. Coding Challenge #4](#section18)

<a id='section1'></a>
<h3>10. Values and Variables</h3> 

[back to Index](#section0)

```js

let js = "amazing";
// if (js === "amazing") alert("Javascript is fun!");
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);
let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);
let jonas_matilda = 'JM';
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
let job1 = 'programmer';
let job2 = 'teacher';
console.log(myFirstJob);
console.log(job1);
console.log(firstName); 

``` 

<a id='section2'></a>
<h3>12. Data Types</h3> 

[back to Index](#section0)

```js

// DATA TYPES
// true;
// console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof 'Kilo');
console.log(typeof 42);
// una vez que ya asignamos un valor a una variable no necesitamos escribir let de nuevo
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(typeof null);

``` 

<a id='section3'></a>
<h3>13. let, const and var</h3> 

[back to Index](#section0)

```js

let age = 30;
age = 31;
const birthYear = 1991; // la variable no va a poder cambiar luego de valor
var job = 'programer';
job = 'teacher';

``` 

<a id='section4'></a>
<h3>13. BASIC OPERATORS</h3> 

[back to Index](#section0)

```js

///////////////////////////////////////////////////
// BASIC OPERATORS
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageSarah / 10, 2 **3);
const firstName = 'Jonas';
const lastName = 'Schmedtman';
console.log(firstName +' '+lastName);
let x = 10 + 5;
x += 10;
x *= 2;
x++; //x = x +1
x--; // x = x -1
console.log(x);
// comparison operators 
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 19);
console.log(ageSarah >= 20);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now -2019);

``` 

<a id='section5'></a>
<h3>14. OPERATOR PRECEDENCE</h3> 

[back to Index](#section0)

```js

// OPERATOR PRECEDENCE
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = 2037 - 2018;
console.log(now - 1991 > now -2019);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
let x, y;
x = y = 25 -10 - 5;
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah)

``` 

<a id='section6'></a>
<h3>15. Coding Challenge #1</h3> 

[back to Index](#section0)

```js

// Coding Challenge #1
// const markWeight = 78;
// const markTall = 1.69;
// const johnWeight = 92;
// const johnTall = 1.95;
const markWeight = 95;
const markTall = 1.88;
const johnWeight = 85;
const johnTall = 1.76;
const marksBMI = markWeight / markTall ** 2;
const johnsBMI = johnWeight / johnTall ** 2;
const markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI, johnsBMI, markHigherBMI);


``` 

<a id='section7'></a>
<h3>17. Strings and Template Literals</h3> 

[back to Index](#section0)

```js

STRINGS AND TEMPLATE LITERALS
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2022;
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + " years old " + job +'!';
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);
console.log('String with \n\
multiple \n\
lines');
console.log(`String with
multiple
lines`);


``` 

<a id='section8'></a>
<h3>18. Taking Decisions: if / else Statements</h3> 

[back to Index](#section0)

```js

TAKING DECISIONS: IF / ELSE STATEMENTS
const age = 14;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log('Sarah can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
} 
const birthYear = 2021;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century)

``` 

<a id='section9'></a>
<h3>19. CODING CHALLENGE #2</h3> 

[back to Index](#section0)

```js

// const markWeight = 95;
// const markTall = 1.88;
// const johnWeight = 85;
// const johnTall = 1.76;
const markWeight = 78;
const markTall = 1.69;
const johnWeight = 92;
const johnTall = 1.95;
const marksBMI = markWeight / markTall ** 2;
const johnsBMI = johnWeight / johnTall ** 2;
const markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI, johnsBMI, markHigherBMI);
if (markHigherBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else {
  console.log(`John's BMI (${johnsBMI}) is higher than Mark's! (${marksBMI})`);
}
console.log(`Mark's BMI ${marksBMI} is higher than John's ${johnsBMI}`);

``` 

<a id='section10'></a>
<h3>20. Type Conversion and Coercion</h3> 

[back to Index](#section0)

```js

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);
// type coercion
// es cuando javascript tiene q lidear con dos tipos diferentes de valores, 
//en este caso javascrip intentaria cambiar uno de los tipos para tener dos iguales
console.log('I am '+ 23 + ' years old')
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');
let n = '1' + 1;
n = n - 1 ;
console.log(n)

``` 

<a id='section11'></a>
<h3>21. Truthy and Falsy Values</h3> 

[back to Index](#section0)

```js

// 5 falsy values:0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
const money= 0;
if(money) {console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}
const platinia = 10;
if(platinia) {console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}
let height;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is undefined');
}
let alto = 10;
if (alto) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is undefined');
}

``` 

<a id='section12'></a>
<h3>22. Equality Operators: == vs. ===</h3> 

[back to Index](#section0)

```js

const age = 18;
if(age === 18) console.log('You just became an adult :D')
console.log('18' == 18);
console.log('18' === 18);
const favourite = Number(prompt('Whats your favourite number?'));
console.log(favourite);
console.log(typeof(favourite));
if (favourite == 23) {
  console.log('Cool! 23 is an amazing number');
} else if(favourite === 7){
  console.log(`${favourite} is also a good number, a veces`);
}else {
  console.log(`${favourite} is also a good number`);
}
if (favourite !== 23) console.log('Why not 23?');

``` 

<a id='section13'></a>
<h3>23. Boolean Logic</h3> 

[back to Index](#section0)

```js

  
 ``` 

<a id='section14'></a>
<h3>24. Logical Operators</h3> 

[back to Index](#section0)

```js
  
const hasDriversLcense = true;
const hasGoodVision = true;
console.log(hasDriversLcense && hasGoodVision);
console.log(hasDriversLcense || hasGoodVision);
console.log(!hasDriversLcense);
const shouldDrive = hasDriversLcense && hasGoodVision;
// if (shouldDrive) {
//   console.log('Sara is able to drive');
// } else {
//   console.log('Sara should learn to drive');
// }
const isTired = true;
console.log(hasDriversLcense || hasGoodVision || isTired);
console.log(hasDriversLcense && hasGoodVision && !isTired);
if (hasDriversLcense && hasGoodVision && !isTired) {
  console.log('Sara is able to drive');
} else {
  console.log('Sara should not drive');
}
  
``` 

<a id='section15'></a>
<h3>25. Coding Challenge #3</h3> 

[back to Index](#section0)

```js
  
let dolphins;
let koalas;
dolphins = (97 + 112 + 101) / 3;
koalas = (109 + 95 + 106) / 3;
if  (dolphins > koalas) {
  console.log('dolphins win with for ' + dolphins  + ' poinsts');
} else if (dolphins < koalas){
  console.log(`koalas win with ${koalas} points`);
} else {
  console.log('It is a draw')
}
if ((dolphins > koalas) && dolphins >= 100){
  console.log('dolphins get the bonues with ' + dolphins  + ' poinsts');
} else if ((dolphins < koalas) && koalas >= 100) {
  console.log(`koalas get the bonus win ${koalas} points`);
} else if ((dolphins === koalas) && koalas >= 100 && dolphins >= 100) {
  console.log(`both win the trophy`); 
}else {
  console.log('Nobody get the bonus');
}

``` 

<a id='section16'></a>
<h3>26. The switch Statement</h3> 

[back to Index](#section0)

```js

////////////////////////////////////////////////////////////////////
/////////////////////////////IMPORTANTE/////////////////////////////
////////////////////////////////////////////////////////////////////
const day = 'wednesday';
switch(day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record Videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend!!!')
    break;
  default:
    console.log('Not a valid day!');
}
if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if(day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record Videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend!!!');
} else {
  console.log('Not a valid day!');
}
  
``` 

<a id='section17'></a>
<h3>27. Statements and Expressions</h3> 

[back to Index](#section0)

```js

3 + 4
1991
true && false && !false
if (23 > 10) {
  const str = '23 is bigger';
}
const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);
////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);
let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

``` 

<a id='section18'></a>
<h3>Coding Challenge #4</h3> 

[back to Index](#section0)

```js

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
TEST DATA: Test for bill values 275, 40 and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/




  
  



