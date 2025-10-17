// Give the user 10 lives when loading the game
let lives = 10;

// Get a random number
let secretNum = getRandomNum();

// Prompt to go up or down
let clue = "";

//Select a HTML element and add an event listener and hide the button
let startButton = document.getElementById("play");
startButton.addEventListener("click", letsPlay);
startButton.style.display = "none";

// Div properties for animation
let countDown = document.getElementById("countdown");
let count = 10;
let coolers = [
  "#61A0AF",
  "#96C9DC",
  "#F06C9B",
  "#F9B9B7",
  "#F5D491",
  "#cfe1b9",
  "#b7b7a4",
  "#fdf0d5",
  "#598392",
  "#335c67",
  "#b7b7a4",
];

let id = setInterval(() => {
  document.getElementById("lives").innerHTML = lives;
  countDown.style.border = "1px solid rgb(88, 16, 16)";
  countDown.innerHTML = count;
  countDown.style.backgroundColor = coolers[count];

  if (count === 9) {
    countDown.style.color = "#fff";
  } else {
    countDown.style.color = "#000";
  }

  if (count === 0) {
    clearInterval(id);
    countDown.style.display = "none";
    startButton.style.display = "block";
  }
  count--;
}, 500);

function getRandomNum() {
  //Returns a number between 1 to 200 inclusive
  return Math.floor(Math.random() * 200 + 1);
}

function letsPlay() {
  // Set a variable to control the while loop
  let isGameOver = false;
  let tries = 0;
  lives = 10;
  while (!isGameOver) {
    // Check if you have enough lives to continue
    if (lives === 0) {
      alert(
        "There secret number is: " +
          secretNum +
          ".\nYou have run out of lives 💖.\nGame Over man!\nGame Over!!"
      );
      break;
    }
    let guess = prompt(
      `Please guess a number.\nYou have ${lives} 💖 lives left ${clue}`
    );

    // When the user presses Cancel aor Esc key. Give them a chance to continue
    if (guess === null) {
      let choice = prompt(
        "Do you want to stop playing the game? Press Y to exit or any key to continue playing"
      );
      if (choice === null || choice.toLowerCase() === "y") {
        alert("You choose to stop the game. See you next time.");
        break;
      } else {
        continue;
      }
    }

    // Decrement the lives for each attempt and increament number of tries
    lives--;
    tries++;

    if (parseInt(guess) === secretNum) {
      let stopTheGame = prompt(
        guess +
          " is the corrent number after " +
          tries +
          " tries. Well done🎉🎈💃.\n Do you want to play again? Press Y to continue or any key to exit"
      );

      if (stopTheGame !== null && stopTheGame.toLowerCase() === "y") {
        // Top up the lives
        lives = 10;
        tries = 0;
        //reset the secret number
        secretNum = getRandomNum();

        // Reset the prompt direction
        clue = "";

        continue;
      } else {
        alert("Thank you for playing. See you again next time.");
        isGameOver = true;
      }
    } else {
      if (guess > secretNum) {
        clue = "\n(Clue 🫣): Incorrect, too high. Go ⬇️.";
      } else {
        clue = "\n(Clue 🫣): Incorrect, too low. Go ⬆️.";
      }
    }
  }
}
