/*
  Pong Game
  This is a simple implementation of the classic Pong game using HTML5 Canvas and JavaScript.
  The game features a paddle controlled by the player, and a bouncing ball. 

  This file contains the code that alters the appearance of the home page, and allows
  the user to start the game.

  Author: Humayra Chowdhury
  Version: 1.2
  File: index.js
*/

// Play background music
const backgroundMusic = new Audio('sounds/homepageMusic.mp3');
backgroundMusic.loop = true; // Loop the music
backgroundMusic.play(); // Start playing the music


/* ========================================
    'Best score' code
   ======================================== */

if (localStorage.getItem('bestScore') === null) {
  localStorage.setItem('bestScore', 0);
}

let best_score_text = document.getElementById("best-score-text");
best_score_text.innerText = "Highscore: " + localStorage.getItem('bestScore');



/* ========================================
    'Start Game' button code
   ======================================== */

function start_game () {
  // Stop the background music
  backgroundMusic.pause(); 

  // Play sound effect
  const startSound = new Audio('sounds/gameStart.mp3');
  startSound.play();

  // Redirect to the game display page
  startSound.onended = () => {
    window.location.href = "game-display.html";
  };
}

let start_game_button = document.getElementById("start-game-button");
start_game_button.addEventListener('click', start_game);
