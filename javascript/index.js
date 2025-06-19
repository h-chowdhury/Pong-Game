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
