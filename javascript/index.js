/* ========================================
    'Star Game' button code
   ======================================== */

function start_game () {
  window.location.href = "game-display.html";
}

let start_game_button = document.getElementById("start-game-button");
start_game_button.addEventListener('click', start_game);
