/*
  Pong Game
  This is a simple implementation of the classic Pong game using HTML5 Canvas and JavaScript.
  The game features a paddle controlled by the player, and a bouncing ball. 

  This file contains the code that draws the game elements onto the canvas.

  Author: Humayra Chowdhury
  Version: 1.0
  File: script.js
*/

const canvas = document.getElementById('game-canvas');

// Allows canvas to be used in drawing 2D graphics
const ctx = canvas.getContext('2d');

// Draw game
function draw() {

  // Clear canvas
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Draw paddle
  ctx.fillStyle = "white";
  ctx.fillRect(20, 250, 10, 100); // x, y, width, height
}

// Call draw() repeatedly 
setInterval(draw, 1000 / 60); // 60 FPS