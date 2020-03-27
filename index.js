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

// Casi siempre que das enter esperas que el botón debajo del input se presione, buena práctica al 100

userNum.addEventListener(
  "keyup",
  event => event.keyCode === 13 && guessBtn.click()
);

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
