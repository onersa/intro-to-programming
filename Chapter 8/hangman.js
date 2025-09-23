var pickWord = function (arrWords) {
  //SELECT A WORD FROM THE ARRAY USING A RANDOM INDEX
  return arrWords[Math.floor(Math.random() * words.length)].toLowerCase();
};

var setupAnswerArray = function (word) {
  var arrAnswer = [];
  //ADD IN THE ARRAY AN '_' (UNDERSCORE) FOR EACH LETTER IN THE word VARIABLE
  for (let i = 0; i < word.length; i++) {
    arrAnswer[i] = "_";
  }
  return arrAnswer;
};

var showPlayerProgress = function (arr) {
  alert(arr.join(" "));
};

var updateGameState = function (guess, word, answerArray) {
  var correctGuesses = 0;
  guess = guess.toLowerCase();
  //CHECK WHETHER LETTER IN guess IS IN THE VALUE OF THE word
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess && answerArray[j] === "_") {
      lives = 3; //reset the lives to 3
      answerArray[j] = guess;
    }
    if (answerArray[j] !== "_") correctGuesses++;
  }
  return correctGuesses;
};

showAnswerAndCongratulatePlayer = function (arrAnswer) {
  alert(arrAnswer.join(" "));
  alert("Good job! The answer was " + arrAnswer.join(""));
};

//ARRAY OF WORDS
var words = ["javascript", "monkey", "amazing", "pancake", "Lion"];

var word = pickWord(words);

var answerArray = setupAnswerArray(word);

var remainingLetters = word.length;
var lives = 3;

while (remainingLetters > 0 && lives !== 0) {
  remainingLetters = word.length;
  lives--; //
  showPlayerProgress(answerArray);

  var guess = prompt("Guess a letter");

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter");
  } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}

if (guess !== null && lives !== 0) {
  showAnswerAndCongratulatePlayer(answerArray);
} else if (lives === 0) {
  alert("You ran out of lives. Game over!");
} else {
  alert("Player has quit the game");
}
