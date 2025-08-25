// Generate a random answer between 1 and 100
let answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let history = [];

// Called when user clicks "Guess"
function checkGuess() {
  const guess = Number(document.getElementById("guess").value);
  attempts++;
  history.push(guess);

  if (guess === answer) {
    document.getElementById(
      "result"
    ).innerText = `Correct! You guessed it in ${attempts} tries 🎉`;
  } else if (guess < answer) {
    document.getElementById("result").innerText = "Too low!";
  } else {
    document.getElementById("result").innerText = "Too high!";
  }

  document.getElementById("history").innerText = `Your guesses: ${history.join(
    ", "
  )}`;
}

// Reset the game
function restartGame() {
  answer = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  history = [];
  document.getElementById("result").innerText = "";
  document.getElementById("history").innerText = "";
  document.getElementById("guess").value = "";
}
