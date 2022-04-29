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
