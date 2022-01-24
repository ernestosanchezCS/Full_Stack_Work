var startButton = document.getElementById("start-button");
var wordBlanks = document.getElementById("wordB");
var timerElement = document.getElementById("clock");
var resetButton = document.getElementById("resetB");
var winTag = document.getElementById("win");
var lossTag = document.getElementById("loss");

var words = ["variable", "array", "modulus", "object", "function", "string", "boolean"];
var randomWord;
var wordArray = [];
var solvedArray = [];
var wordLength;
var timerCount;
var blanks = "";
var wins = 0;
var loss = 0;


if (((localStorage.getItem("loss")) > 0) || ((localStorage.getItem("wins")) > 0)) {
    winTag.textContent = localStorage.getItem("wins");
    lossTag.textContent = localStorage.getItem("loss");
}

function getWord() {
    startButton.disabled = true;
    randomWord = words[Math.floor(Math.random() * words.length)];
    //random has the random word selected
    wordLength = randomWord.length;

    //create array copy of random word to check later on 
    wordArray = Array.from(randomWord);
    console.log(wordArray);
    return;
}

function setBlanks() {
    //we need to append word blanks to html with hidden letter values
    //loop that adds more blanks until word
    for (i = 0; i < wordLength; i++) {
        blanks += "_ ";
        solvedArray.push("_");
    }
    console.log(solvedArray);
    console.log(blanks);
    wordBlanks.innerHTML = blanks;
}

function startTimer() {

    var timerInterval = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;

        if (timerCount == 0) {
            //end the game time is up clear the time interval
            //call end game function
            clearInterval(timerInterval);
            loseGame();
        }

    }, 1000);
}

function checkLetter(letter) {
    letter = letter.toLowerCase();
    for (i = 0; i < wordLength; i++) {

        if (letter == wordArray[i] && timerCount > 0) {
            //we have a match
            //we need to place the letter matched onto screen 
            //update the wordBlanks.innerHTML string 
            //update the solvedArray to show letter 
            solvedArray[i] = wordArray[i];
            console.log(solvedArray);
            //we have an array taht updates as we click matchin letters
            //now we must update the screen to match array as we go 
            wordBlanks.innerHTML = solvedArray.join(' ');
        }
    }
}

function startGame() {

    getWord();
    console.log(randomWord);
    setBlanks();
    console.log(blanks);
    timerCount = 3;
    startTimer();
    //playAgain()
    //if true if false 
    //reset start button to enabled
}

function loseGame() {
    wordBlanks.innerHTML = "You Lost! Time Ran Out.";
    //disable the keydown event 
    loss += 1;
    localStorage.setItem("loss", loss);
    localStorage.setItem("wins", wins);
    lossTag.textContent = loss;
}

startButton.addEventListener("click", startGame);

document.addEventListener("keydown", function (event) {
    //console.log(typeof keyPressed);
    //keyPressed holds value of keypressed until another key is pressed
    //now we crosscheck if our word has the letter chosen
    //if user repeats a letter it will redo the show letter action 
    //should just stay the same 
    checkLetter(event.key);
});

resetButton.addEventListener("click", function () {
    //reset localStorage wins and losses
    winTag.textContent = "0";
    lossTag.textContent = "0";
    localStorage.setItem("loss", 0);
    localStorage.setItem("wins", 0);

});

//i just renamed the startGameButton function to just startGame and it works
//so thats just the bullshit that i deal with 
//good thing i fuckin spent like 20 mins on tryna figure out the fuckin shit 
//was wrong in my code as it was all fuckin perfect just some bullshit 
//FAAAACK
//or potentially u cant name it button if it refers to a button back in html element
//just listening to that justification sounded dumb as fuck so im just hoping 
//it wasnt litterly pointless my past 20 mins good day make that 22 mins now
/*pseudo

when user clicks start button
we have a event listener that triggers 
:pick random word
:sets the right amount of letter blanks for the word length
:start timer function 10s and display time every second passed

we have event listener for keyboard event
:all lower case then we check for keydown even key if matches any of our current letters and if so we display that letter/letters in place of blank
:we need to check for all letters discovered

we can make a loop that checks letter keyed down to our word
goes through checking for equality if equal it will change that particular blank to display but still will finish the rest to make sure there are no double letters
also every time we change blank to display we will add to a counter that will compare to word length and once they equal we know we have gotten all the words and the game will end with user winning 
however at the same time we make an event that triggers when timer runs out, if the timer runs out it will end the game with user losing 

we have localStorage object created with wins loses that are displayed and refreshed/rendered after every win or loss 
then start button will become enabled again and will loop back from the beginning 



-- Instructions
The completed application should meet the following criteria:
* As a user, I want to start the game by clicking on a button. 
* As a user, I want to try and guess a word by filling in a number     of blanks that match the number of letters in that word.
* As a user, I want the game to be timed. 
* As a user, I want to win the game when I have guessed all the letters in the word.
* As a user, I want to lose the game when the timer runs out before I have guessed all the letters.
* As a user, I want to see my total wins and losses on the screen. 
-- Specifications
* When a user presses a letter key, the user's guess should be captured as a key event.
* When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear. 
* When a user wins or loses a game, a message should appear and the timer should stop. 
* When a user clicks the start button, the timer should reset. 
* When a user refreshes or returns to the brower page, the win and loss counts should persist.

*/