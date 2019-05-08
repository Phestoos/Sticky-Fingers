window.addEventListener('load', init);//load init function on startup

//Globals

// Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
// To change level
const currentLevel = levels.medium;


let time = currentLevel;
let score = 0;
let isPlaying; //represent the game mode, if its playing it should be true otherwise false.

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const Hs = document.querySelector('#high-score');

 const words = [
     'hat',
     'river',
     'brian',
     'code',
     'festus',
     'stinky',
     'nutrition',
     'gamers',
     'cocktail',
     'stubborn',
     'hello',
     'hero',
     'javascript',
     'developer',
     'fullstack',
     'ferdinand',
     'awazi',
     'hassan',
     'aikayKing',
     'Matthew',
     'Lionel',
     'guardiola',
     'echo'
 ];
 
 // Initialize Game
 function init() {
     //Show mumber of seconds
     seconds.innerHTML = currentLevel;
     //Load word from array
     showWord(words);
     //Start matching on word input
     wordInput.addEventListener('input', startMatch);

     //call countdown every second
     setInterval(countdown, 1000);

    //Check game status
    setInterval(checkStatus, 50);
 }
//Start Match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    //if score is -1 dispaly 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
    scoreDisplay.innerHTML = score;
}
//Match current word to word input
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!! Type next word to Begin -->';
        return true;
    }else{
        message.innerHTML = 'Words mismatch, check your spellings';
        return false;
    }
}

 // Pick & show Random word
 function showWord(words) {
     const randIndex = Math.floor(Math.random() * words.length);
     // Output random word
     currentWord.innerHTML = words[randIndex];
 }

 //Countdown timer
 function countdown() {
     //make sure time is not run out
     if (time > 0) {
         //Dcrement time
         time--;

     } else if (time === 0) {
         // Game is over
         isPlaying = false;
     }
     //show time
     timeDisplay.innerHTML = time;
 }

 //Check game status
 function checkStatus() {
     if (!isPlaying && time === 0) {
         message.innerHTML = 'Game Over!!';
         score = -1;//reset score
     }
 }
 //Display high score
 function highScore() {
     if (!isPlaying && time === 0) {
         Hs,innerHTML = 'Your high score is: ';
     }
 }
