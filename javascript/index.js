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


/* ========================================
    'Best score' code
   ======================================== */

if (localStorage.getItem('bestScore') === null) {
  localStorage.setItem('bestScore', 0);
}

let best_score_text = document.getElementById("best-score-text");
best_score_text.innerText = "Best score: " + localStorage.getItem('bestScore');



/* ========================================
    'Start Game' button code
   ======================================== */

function start_game () {
  window.location.href = "game-display.html";
}

let start_game_button = document.getElementById("start-game-button");
start_game_button.addEventListener('click', start_game);
