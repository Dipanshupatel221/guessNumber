'use strict';
// console.log(document.querySelector('.between').textContent);
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Kuch to likh Gandu';
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = '🎊You are great Gandu🎊';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40rem';
    document.querySelector('.number').textContent = secretnumber;
    highScore = Math.max(highScore, secretnumber);
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess > secretnumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector('.message').textContent =
        ' 💹 Bahut jyada hai 💹 ';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🫵 Bau chud gai haar gaya🫵';
    }
  } else if (guess < secretnumber) {
    score = score - 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = ' 💹 Bahut kam hai 💹 ';
    score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Chal guess kar';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
