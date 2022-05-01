sudo npm install live-server -g

live-server

**59. Using Google, StackOverflow and MDN**

**finding max and min**

```js 

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }

  console.log('the max is ' + max + ' and the min is ' + min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log('The amplitude is ' + amplitude + ' degrees');

``` 

**how to concatenate 2 arrays**


```js

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2)
  console.log(temps);
       
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }

  console.log('the max is ' + max + ' and the min is ' + min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3,5,1], [20, 13, 23]);
console.log('The amplitude is ' + amplitudeNew + ' degrees');


```
