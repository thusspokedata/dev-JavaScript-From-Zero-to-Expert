'use strict';
/*

///////////////////////////////////////////////////////////////////////////////////////
// 72. Selecting and Manipulating Elements
console.log(document.querySelector('.message').textContent); // Start guessing...
document.querySelector('.message').textContent = 'Correct Number!'; 
console.log(document.querySelector('.message').textContent); // Correct Number!


document.querySelector('.number').textContent = 13;
console.log(document.querySelector('.number').textContent) // 13
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.score').textContent) // 10

document.querySelector('.guess').value = 9;
// console.log(document.querySelector('.guess').value); // 23

document.querySelector('.check').addEventListener('click', function() {
  console.log(document.querySelector('.guess').value) // when I click with the mouse I get 9
}) // there are many ways, this is probably the better


document.querySelector('.check').addEventListener('click', function() {
  const guess = document.querySelector('.guess').value
  console.log(typeof guess);  // string
                      // usually whenever we get something from the user interface, for example, 
                      //from an input field, it usually always is a string.
}) 

// we nedd to transform this to a number
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess);  // 0, 'number'

  if (!guess) {// 0 in this logical context of the FL statement will be false
    document.querySelector('.message').textContent = 'No Number'; // No number
  }
})       
  
*/


////////////////////////////////////////////////////////////////////////////////////////////
// 74. Implementing the Game Logic

let secretNumber = Math.trunc(Math.random()*20)+1; // Math.trunc remove decimals
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

const takeScore = function(score) {
  document.querySelector('.score').textContent = score;
}

const sectorNumber = function(styleNumber) {
  document.querySelector('.number').style.width  = styleNumber;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);


  // When there is no input
  if (!guess) {
    displayMessage('No number!');

  // when player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'You got it!';
    displayMessage('You got it!');
    score = score + 5
    // document.querySelector('.score').textContent = score;
    takeScore(score);
    document.querySelector('body').style.backgroundColor = '#60b347';
                                                                      // And in this case, it is the background color. So background and in CSS, we write the background color like this
                                                                      // "background-color". However, in JavaScript that's not allowed.In JavaScript  all these property names that have two words
                                                                      // like background-color will simply adopt the Camel case notation
                                                                          // document.querySelector('.number').style.width = '30rem';
    sectorNumber('30rem')
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    };
  
  // when guess is too high
  } else if(guess != secretNumber) {
    score--;
    if (score === 0) {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
    } else {
      displayMessage(guess > secretNumber ? 'Too High!!' : 'Too Low!!'); 
    // document.querySelector('.score').textContent = score;
    takeScore(score);
    }
  }
});


  // old way
  // } else if (guess > secretNumber) {
  //   score--;
  //   if (score === 0) {
  //     document.querySelector('.message').textContent = 'Too High!! you lost the game!';
  //   } else {
  //     document.querySelector('.message').textContent = 'Too High!!';
  //   }
  //   document.querySelector('.score').textContent = score;

  // // when guess is too high
  // } else {
  //   score--;
  //   if (score === 0) {
  //     document.querySelector('.message').textContent = 'Too low!! you lost the game!';
  //   } else {
  //     document.querySelector('.message').textContent = 'Too low!!';
  //   }
  //   document.querySelector('.score').textContent = score;
  // }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;
  displayMessage('Start guessing...!!');
  // document.querySelector('.score').textContent = score;
  takeScore(score);
  // document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  sectorNumber('15rem')
  
});

