'use strict';

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

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
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

*/

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