/* VALUES AND VARIABLES 
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

/////////////////////////////////////////////
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



///////////////////////////////////////////////////
// LET, CONST AND VAR

let age = 30;
age = 31;


const birthYear = 1991; // la variable no va a poder cambiar luego de valor

var job = 'programer';
job = 'teacher';

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



///////////////////////////////////////////////////////

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


/////////////////////////////////////////////////////////

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



////////////////////////////////////////////////////////
// STRINGS AND TEMPLATE LITERALS

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



/////////////////////////////////////////////////////////////////
// TAKING DECISIONS: IF / ELSE STATEMENTS

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


/////////////////////////////////////////////////////////////////////77
// CODING CHALLENGE #2

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

*/