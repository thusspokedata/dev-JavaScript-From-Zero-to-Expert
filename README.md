# The-Complete-JavaScript-Course-2022-From-Zero-to-Expert-
The Complete JavaScript Course 2022: From Zero to Expert!

<img src="/images/3_different_function_types.png" width="650" height="400" >

<img src="/images/anatomy_of _a_function.png" width="650" height="400" >

**38. Coding Challenge #1**

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

**41. Coding Challenge #2**
```js
const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
  } 


// anothe way really cool
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const bills = [125,555,44]

const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])]
const total = [(tips[0]+bills[0]), (tips[1]+bills[1]),(tips[2]+bills[2])]
console.log(bills, tips, total)

```
**44. Object Methods** <em>very good function that I didnt kwon in python</em>

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
  }
  
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'not'} driver's license.`
  }
};

console.log(jonas.calcAge()); // I need to activate the function just ones, then the new variable is created and I save computer time

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());

```

**46. Iteration: the for loop**


```js
////////////////////////////////////////////////////////////////////////////////////////////////////7
// 46. Iteration: The for Loop

// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
  console.log('Lifting weights repetitions ' + rep)
}

*/

/////////////////////////////////////////////////////////////////////////////////////////////////7
// 47. Looping Arrays, Breaking and Continuing

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
