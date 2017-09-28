  // Variables for user options -->
  var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  // This array will hold user guesses
  var guessedLetters = [];

  // This variable will be randomly assigned one of the 26 letters 
  var randomLetter = null;

  // Here is our countdown
  var guessesLeft = 9;

  // This is out counter for wins/losses
  var wins = 0;
  var losses = 0;

  // These functions updateGuesses, updateGuessesLeft, and updateGuessesSoFar
  var updateGuessesLeft = function() {
    //Here we grab the HTML element and setting it equal to the guessesLeft.
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
  };

  var updateRandomLetter = function() {
    // Generate RandomLetter
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
  };

  var updateGuessesSoFar = function() {
    //This function takes the guesses the user has tried and displays them seperated by commas.
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
  };

  //Function will be called when we reset everything
  var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];
    updateRandomLetter();
    updateGuessesLeft();
    updateGuessesSoFar();
  };

  //Execute on page load.
  updateRandomLetter();
  updateGuessesLeft();


  // This function will capture the keyboard clicks.
  document.onkeyup = function(event) {
    //reduces the guesses by one
    guessesLeft--;

    // Lowercase the letter
    var letter = String.fromCharCode(event.keyCode).
      toLowerCase();

    // Then add the guess to the guessedLetters array
    guessedLetters.push(letter);

    // Then its going to run the update function
    updateGuessesLeft();
    updateGuessesSoFar();

    // We'll check if there's a match.
    if (letter === randomLetter) {

      // If they match the user wins and HTML will display the win.
      wins++;
      document.querySelector("#wins").innerHTML = wins;

      // Then we'll reser the game
      reset();
    }
  
    //If guesses run out...
    if (guessesLeft === 0) {

      //Then we loss and HTML will display the loss
      losses++;
      document.querySelector("#losses").innerHTML = lossess;

      //Then we call the reset.
      reset();
    }
  };