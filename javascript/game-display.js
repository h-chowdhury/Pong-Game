/*
  Pong Game
  This is a simple implementation of the classic Pong game using HTML5 Canvas and JavaScript.
  The game features a paddle controlled by the player, and a bouncing ball. 

  This file contains the code that draws the game elements onto the canvas.

  Author: Humayra Chowdhury
  Version: 3.0
  File: game-display.js
*/



/* ========================================
    Popup overlay code
      This section contains the code to display a popup overlay when the game is over, and the 
      functionality for the restart and home buttons.
   ======================================== */

// Create audio elements for sound effects
const gameOverMusic = new Audio('sounds/gameOverMusic.mp3');
const backgroundMusic = new Audio('sounds/gameMusic.mp3');

// Hide the popup overlay initially
document.getElementById('popup-overlay').style.display = "none";

// 'Play again' button functionality
document.getElementById('play-again-button').addEventListener('click', () => {
  // Play sound effect
  const buttonSound = new Audio('sounds/buttonClick.mp3');
  buttonSound.play();

  // Play background music
  gameOverMusic.pause();
  backgroundMusic.loop = true; // Loop the music
  backgroundMusic.play(); // Start playing the music

  // Reset game variables
  paddleY = 250;
  ballX = 780;
  ballY = Math.random() * (canvas.height - ballRadius);
  ballXSpeed = 3;
  ballYSpeed = 2;
  score = 0;
  gameOver = false;

  // Hide the popup overlay
  document.getElementById('popup-overlay').style.display = "none";
});

// 'Home' button functionality
document.getElementById('home-button').addEventListener('click', () => {
  // Play sound effect
  const buttonSound = new Audio('sounds/buttonClick.mp3');
  buttonSound.play();

  // Redirect to the home page
  buttonSound.onended = () => {
    window.location.href = 'index.html';
  };
});



/* ========================================
    Game logic
      This section contains the main game logic, including paddle and ball movement,
      collision detection, and score tracking.
   ======================================== */

// Play background music
backgroundMusic.loop = true; // Loop the music
backgroundMusic.play(); // Start playing the music

// Get the canvas element from the HTML
const canvas = document.getElementById('game-canvas');

// Allows canvas to be used in drawing 2D graphics
const ctx = canvas.getContext('2d');

// Initial paddle information
const paddleX = 20;
let paddleY = 250;
const paddleHeight = 100;
const paddleWidth = 10;
const paddleSpeed = 5;

// Initial ball information
const ballRadius = 10;
let ballX = 780;
let ballY = Math.random() * (canvas.height - ballRadius);
let ballXSpeed = 3;
let ballYSpeed = 2;

// Track key presses
const keys = {};

// Game over status (set to true when ball goes out of bounds)
let gameOver = false;
let score = 0;

document.addEventListener ('keydown', (e) => {
  keys[e.key.toLowerCase()] = true;
});

document.addEventListener ('keyup', (e) => {
  keys[e.key.toLowerCase()] = false;
});

// Draw game
function draw() {

  if (!gameOver) {
    // Update paddle position based on key input
    if ((keys['w'] || keys['arrowup']) && paddleY > 0) {
      paddleY -= paddleSpeed; // Move up
    }
    if ((keys['s'] || keys['arrowdown']) && paddleY < canvas.height - paddleHeight) {
      paddleY += paddleSpeed; // Move down
    }

    // Update ball position
    ballX -= ballXSpeed; // Move left
    ballY += ballYSpeed; // Move down

      // Collision detection for top & bottom wall
      if (ballY <= 0 || ballY >= canvas.height - ballRadius) {
        // Play sound effect
        const wallSound = new Audio('sounds/wallCollision.mp3');
        wallSound.play();

        ballYSpeed = -ballYSpeed;
      }

      // Collision detection for right wall 
      if (ballX >= canvas.width - ballRadius) {
        // Play sound effect
        const wallSound = new Audio('sounds/wallCollision.mp3');
        wallSound.play();

        ballXSpeed = -ballXSpeed;
      }

      // Collision detection for paddle
      if ((paddleX < ballX && ballX < paddleX + paddleWidth) && (ballY >= paddleY) && (ballY <= paddleY + paddleHeight)) {
        // Play sound effect
        const paddleSound = new Audio('sounds/paddleCollision.mp3');
        paddleSound.play();

        ballXSpeed = -ballXSpeed;
        score += 1;
        ballXSpeed *= 1.05;
        ballYSpeed *= 1.05;
      }

      // Detect ball going out of bounds
      if (ballX < 0 - ballRadius) {
        // Play sound effect
        const gameOverSound = new Audio('sounds/gameOver.mp3');
        gameOverSound.play();

        // Pause background music and play game over music
        backgroundMusic.pause();
        gameOverMusic.loop = true;
        gameOverMusic.play();

        gameOver = true;

        // Display popup overlay with final score
        document.getElementById('popup-overlay').style.display = "flex";
        document.getElementById('final-score-text').innerText = ("Your final score is " + score);

        // Update best score in local storage
        if (localStorage.getItem('bestScore') === null || score > localStorage.getItem('bestScore')) {
          localStorage.setItem('bestScore', score);
        }
      }

    // Clear canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw paddle
    ctx.fillStyle = "white";
    ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight); // x, y, width, height

    // Draw ball
    ctx.fillRect(ballX, ballY, ballRadius, ballRadius); // x, y, width, height

    // Draw score 
    ctx.font = "100px 'Press Start 2P' ";
    ctx.textAlign = "center";
    ctx.fillText(score, canvas.width / 2, canvas.height / 2 + 55);

  }

}

// Call draw() repeatedly 
setInterval(draw, 1000 / 60); // 60 FPS