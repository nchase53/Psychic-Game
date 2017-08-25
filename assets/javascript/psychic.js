var computerSelection = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var totalGuesses = 9;

var guessesLeft = 9;

var guessedLetters = [];

var letterToGuess = null;



var computerGuess = computerSelection[Math.floor(Math.random() * computerSelection.length)];
console.log(computerGuess)

//(i=0;1<24;)



var updateGuessesLeft = function() {

  document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;};


var updateLetterToGuess = function() {

  letterToGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];};


var updateGuessesSoFar = function() {
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');};


var reset = function() {

  totalGuesses = 9;

  guessesLeft = 9;

  guessedLetters = [];

  letterToGuess = null;



  updateLetterToGuess();


  updateGuessesLeft();

  updateGuessesSoFar();}

updateLetterToGuess();

updateGuessesLeft();

document.onkeyup = function(event) {

  guessesLeft--;



  guessedLetters.push(userGuess);

  updateGuessesLeft();

  updateGuessesSoFar();

  if (guessesLeft > 0) {

    if (userGuess == letterToGuess) {

      wins++;

      document.querySelector('#wins').innerHTML = "Wins: " + wins;

      alert("Yes, you got it!");

      reset();
    }
  } else if (guessesLeft == 0) {

    losses++;

    document.querySelector('#losses').innerHTML = "Losses: " + losses;

    alert("Try again?");



    reset();

  }}