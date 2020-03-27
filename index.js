let intentos = 0;
const randomNumber = Math.floor(Math.random() * 100) + 1;

// user input
const userNum = document.getElementById("userNum");
const guessBtn = document.getElementById("guessButton");

// containers
const cluesContainer = document.getElementById("clues");
const congratsContainer = document.getElementById("congrats");

// game info
const tries = document.getElementById("tries");
const clue = document.getElementById("clue");

guessBtn.addEventListener(
  "click",
  () => {
    const num = userNum.value;

    if (num == randomNumber) {
      congratsContainer.style.display = "flex";
      cluesContainer.style.display = "none";
      guessBtn.style.display = "none";
      userNum.disabled = true;
      return;
    }

    intentos = intentos + 1;

    cluesContainer.style.display = "flex";
    tries.innerHTML = intentos;
    clue.innerHTML = num > randomNumber ? "⬇️" : "⬆️";
  },
  false
);
