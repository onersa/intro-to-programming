//ARRAY OF WORDS
var words = ["javascript", "monkey", "amazing", "pancake", "Lion"];

//SELECT A WORD FROM THE ARRAY USING A RANDOM INDEX
var word = words[Math.floor(Math.random() * words.length)].toLowerCase();

//ADD IN THE ARRAY AN '_' (UNDERSCORE) FOR EACH LETTER IN THE word VARIABLE
var answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;
var lives = 3;

while (remainingLetters > 0 && lives !== 0) {
  lives--; //
  alert(answerArray.join(" "));

  var guess = prompt("Guess a letter").toLowerCase();

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter");
  } else {
    //CHECK WHETHER LETTER IN guess IS IN THE VALUE OF THE word
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess && answerArray[j] === "_") {
        lives = 3; //reset the lives to 3
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}

if (guess !== null && lives !== 0) {
  alert(answerArray.join(" "));
  alert("Good job! The answer was " + word);
} else if (lives === 0) {
  alert("You ran out of lives. Game over!");
} else {
  alert("Player has quit the game");
}
