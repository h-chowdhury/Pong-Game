/*
  Pong Game
  This is a simple implementation of the classic Pong game using HTML5 Canvas and JavaScript.
  The game features a paddle controlled by the player, and a bouncing ball. 

  This file contains the code that draws the game elements onto the canvas.

  Author: Humayra Chowdhury
  Version: 1.8
  File: script.js
*/

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
let ballX = 780;
let ballY = 300;
let ballXSpeed = 3;
let ballYSpeed = 2;
const ballRadius = 10;

// Track key presses
const keys = {};

// Game over status (set to true when ball goes out of bounds)
let gameOver = false;

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
        ballYSpeed = -ballYSpeed;
      }

      // Collision detection for right wall 
      if (ballX >= canvas.width - ballRadius) {
        ballXSpeed = -ballXSpeed;
      }

      // Collision detection for paddle
      if ((ballX <= paddleX + paddleWidth) && (ballY >= paddleY) && (ballY <= paddleY + paddleHeight)) {
        ballXSpeed = -ballXSpeed;
      }

      // Detect ball going out of bounds
      if (ballX < 0 - ballRadius - 2) {
        gameOver = true;
        alert("Game Over!");
      }

    // Clear canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw paddle
    ctx.fillStyle = "white";
    ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight); // x, y, width, height

    // Draw ball
    ctx.fillRect(ballX, ballY, ballRadius, ballRadius); // x, y, width, height
    }
}

// Call draw() repeatedly 
setInterval(draw, 1000 / 60); // 60 FPS