'use strict';
const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekday[3]]: {
    open: 12,
    close: 22,
  },
  [weekday[4]]: {
    open: 11,
    close: 23,
  },
  [weekday[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhance objects literals
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // orderDelivery: function ({
  //   starterIndex = 1,
  //   mainIndex = 0,
  //   time = '20:00',
  //   address,
  // }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   );
  // },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(
  //     `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
  //   );
  // },
  // orderPizza: function (mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient);
  //   console.log(otherIngredients);
  // },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
////////////////////////////////////////////////////////////////////////////////////////
// 103. Destructuring Arrays

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x);
console.log(arr)
const [first, ,third] = restaurant.categories;
console.log(third)


let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]
console.log(main, secondary);

console.log(restaurant.order(2,0));

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2,0)
console.log(starter, mainCourse)

// nested destructuring
const nested = [2,4,[5,6]]
// const [i,,j] = nested
// console.log(i,j)
const [i,,[j,k]] = nested
console.log(i,j,k);

// default values
const [p=1,q=1,r=1, s=1] = [8,9]
console.log(p,q,r,s);



//////////////////////////////////////////////////////////////////////////////
// 104. Destructuring Objects

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);


// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant; // esta fucnion nos permite obtener el mismo resultado pero con diferente nombre de variables
// console.log(restaurantName, hours, tags);

// dafault values
const {menu = [], starterMenu: starters = []} =  restaurant; // le damos un valor un default value en caso de q no exista
console.log(menu, starters)

// mutating variables
let a = 111;
let b = 999;
const obj = {a:23, b:7, c:14};
({a,b} = obj);
console.log(a,b)

// nested objects
const { fri } = openingHours; // puedo usarlo porque openingHours está en una variable en la funcion del renglon 85
console.log(fri);

// const { fri: {open, close} } = openingHours; // puedo usarlo porque openingHours está en una variable en la funcion del renglon 85
// console.log(open, close);

const { fri: {open: o, close: c} } = openingHours; // puedo usarlo porque openingHours está en una variable en la funcion del renglon 85
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21', 
  mainIndex: 2, 
  starterIndex: 2,
})

restaurant.orderDelivery({
  address: 'Bluecherstr, 21', 
  starterIndex: 2,
})

///////////////////////////////////////////////////////////////////////////////////
// 105 .The spread Operator

const arr = [7, 8, 9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // what the spread operator does is to basically take all the values out of the arr array and them write them individually
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi']; // the square brackets is simple the way in wich we have always been writing new arrays
console.log(newMenu)

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy)

// join two arrays 
const menu = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(menu)

// Iterables: arrays, strings, maps, sets. Not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']
console.log(letters)
console.log(...str)

// real world example
// const ingredients = [prompt('Let\'s make pasta! ingredient 1?'), prompt('Ingredient 2?'), prompt('ingredient 3?')];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPasta(...ingredients)

// objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Giuseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name)
console.log(restaurant.name)


////////////////////////////////////////////////////////////////////////////////////////
// 106. Rest Pattern and Parameters

// 1) Destructuring

// SPREAD, because on RIGHT side of = 
const arr = [1, 2, ...[3,4]];

// REST, because on LEFT side of = 
const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b,others)

const  [pizzas, ,risottos, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizzas, risottos, otherFood)

// Objects
const {sat, ...weekDays} = restaurant.openingHours;
console.log(weekDays)

// 2) functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};


add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);       // the rest sintax is taking multiple numbers or multiple values and then packs them all into one array

// ##############################################
// ########### muy buena!!! #####################
// ##############################################
const x = [23, 5, 7];
add(...x)


restaurant.orderPizza('mushroom', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushroom');


////////////////////////////////////////////////////////////////////////////////
// 107. Short Circuiting (&& and ||)

// Use ANY data type, return ANY data type, short-circuiting
console.log('--------- OR -----------')
console.log(3 || 'Jonas');  // short-circuiting means that if the first value is truthy value it will immediatly returns the dirst value
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1)
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 12;
console.log(guests2);

console.log('--------- AND  -----------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


/////////////////////////////////////////////////////////////////////////
// 108. The Nullish Coalescing Operator (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 12;
console.log(guests)
// Nullish: null and undefined (NOT 0 or '')
const guesrCorrect = restaurant.numGuests ?? 10; // the nullish coalescing operator works with the idea or with the concept of nullish values or falsy values
console.log(guesrCorrect)


////////////////////////////////////////////////////////////////////////
// 109. Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// ##############################################
// ########### muy buena!!! #####################
// ##############################################

// nullish asignment operator
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// OR asignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // it is because of short circuiting. It short circuits when the first value is falsy and then immediately returns that falsy value.

// ##############################################
// ########### muy buena!!! #####################
// ##############################################

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


////////////////////////////////////////////////////////////////////////////
// 110. Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmont',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowsky',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witzel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowsky', 'Gnarby', 'Lewandowsky', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1)
const [players1, players2] = game.players;
console.log(players1);

// 2)
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1);

// 5
// ##############################################
// ########### muy buena!!! #####################
// ##############################################
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...players) {
  console.log(players)
  console.log(`${players.length} goals were scored`);
};

// printGoals('Lewandowsky', 'Gnarby', 'Lewandowsky', 'Hummels');
printGoals(...game.scored)

// 7
// 5
// ##############################################
// ########### muy buena!!! #####################
// ##############################################
team1 < team2 && console.log('Team1 is more likely to win');
team2 < team1 && console.log('Team2 is more likely to win');


////////////////////////////////////////////////////////////////////////////////
// 111. Looping Arrays: The for-of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log(...menu.entries());
*/
//////////////////////////////////////////////////////////////////////////
// 112. Enhanced Object Literals

/////////////////////////////////////////////////////////////////////////
// 113. Optional Chaining (?.)

if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// ##############################################
// ########### muy buena!!! #####################
// ##############################################
// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// ##############################################
// ########### muy buena!!! #####################
// ##############################################
for (const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0,1) ?? 'Methods does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Methods does not exist');

// Arrays
const users = [{name: 'Jonas', email: 'hello@jonas.io'}];

// const users = [];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

////////////////////////////////////////////////////////////////////////////////////////
// 114. Looping Objects: Object Keys, Values, and Entries

// Property names
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on ${properties.length} days`);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
  openStr += `${day},`
}
console.log(openStr)

// Property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const x of entries) {
  console.log(x);
}

// [key, value]
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}