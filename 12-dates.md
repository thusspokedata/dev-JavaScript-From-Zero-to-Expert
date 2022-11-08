```js

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // "2037-11-19T14:23:00.000Z"
console.log(future.getTime()); // 2142253380000


const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1); // 10


const future2 = new Date(2037, 08, 09, 15, 23);
const day = `${future2.getDate()}`.padStart(2, 0); // "09"
const month = `${future2.getMonth()}`.padStart(2, 0); // "08"
const year = future2.getFullYear();  // "2037"
console.log(`${day}/${month}/${year}`) // "09/09/2037"

```
