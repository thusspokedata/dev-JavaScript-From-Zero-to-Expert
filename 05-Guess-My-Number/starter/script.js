'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random()*20)+1;
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