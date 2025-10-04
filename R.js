let scores = { rock: 23, paper: 1, scissors: 11 };

function updateScores() {
  document.getElementById('rock-count').textContent = scores.rock;
  document.getElementById('paper-count').textContent = scores.paper;
  document.getElementById('scissors-count').textContent = scores.scissors;
}

function choose(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * 3);
  const computerChoice = choices[random];
  let result = '';

  if (userChoice === computerChoice) {
    result = 'Draw!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
    scores[userChoice]++;
  } else {
    result = 'You lose!';
    scores[userChoice]--;
  }

  updateScores();
  document.getElementById('result').textContent = 
    `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}

// Initialize score on load
updateScores();
