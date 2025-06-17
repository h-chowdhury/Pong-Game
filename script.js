/*
  Pong Game
  This is a simple implementation of the classic Pong game using HTML5 Canvas and JavaScript.
  The game features a paddle controlled by the player, and a bouncing ball. 

  This file contains the code that draws the game elements onto the canvas.

  Author: Humayra Chowdhury
  Version: 1.2
  File: script.js
*/

const canvas = document.getElementById('game-canvas');

// Allows canvas to be used in drawing 2D graphics
const ctx = canvas.getContext('2d');

// Initial paddle information
let paddleY = 250;
const paddleHeight = 100;
const paddleSpeed = 5;

// Initial ball information
let ballX = 780;
let ballY = 300;
const ballSpeed = 3;

// Track key presses
const keys = {};

document.addEventListener ('keydown', (e) => {
  keys[e.key.toLowerCase()] = true;
});

document.addEventListener ('keyup', (e) => {
  keys[e.key.toLowerCase()] = false;
});

// Draw game
function draw() {

  // Update paddle position based on key input
  if ((keys['w'] || keys['arrowup']) && paddleY > 0) {
    paddleY -= paddleSpeed; // Move up
  }
  if ((keys['s'] || keys['arrowdown']) && paddleY < canvas.height - paddleHeight) {
    paddleY += paddleSpeed; // Move down
  }

  // Clear canvas
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Draw paddle
  ctx.fillStyle = "white";
  ctx.fillRect(20, paddleY, 10, paddleHeight); // x, y, width, height

  // Draw ball
  ctx.fillRect(ballX, ballY, 10, 10); // x, y, width, height

}

// Call draw() repeatedly 
setInterval(draw, 1000 / 60); // 60 FPS