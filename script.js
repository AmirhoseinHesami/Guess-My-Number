"use strict";

// Components To Work With
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const body = document.querySelector("body");

// Variables and Game States
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let scoreState = 20;
let highScoreState = 0;

check.addEventListener("click", function () {
  const guessValue = Number(guess.value);

  // When there is no input or the input is less than 1 or more than 20
  if (!guessValue || guessValue < 1 || guessValue > 20) {
    message.textContent = "⛔ No Number!";

    // When player wins
  } else if (guessValue === secretNumber) {
    message.textContent = "🎉 Correct Number!";
    number.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    guess.setAttribute("disabled", "");

    // set the high score
    if (scoreState > highScoreState) {
      highScoreState = scoreState;
      highScore.textContent = highScoreState;
    }

    // When guess is wrong
  } else if (guessValue !== secretNumber) {
    if (scoreState > 1) {
      message.textContent =
        guessValue > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      scoreState--;
      score.textContent = scoreState;

      // when the player loses
    } else {
      message.textContent = "💥 You lost the game!";
      score.textContent = 0;
      body.style.backgroundColor = "#ed143d";
      guess.setAttribute("disabled", "");
    }
  }
});

again.addEventListener("click", function () {
  scoreState = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  message.textContent = "Start guessing...";
  number.textContent = "?";
  guess.value = "";
  score.textContent = scoreState;
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  guess.removeAttribute("disabled");
});
