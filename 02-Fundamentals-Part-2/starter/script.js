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

*/