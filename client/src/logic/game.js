import { draw as drawUser, GAME_TICK } from './user.js';
import { draw as drawTree } from './tree.js';
import { draw as drawTerrain } from './terrain.js';
import { update as updateGrid, draw as drawGrid } from './grid.js';
import './input.js';

let lastRenderTime = 0;
let gameBoard = null;

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / GAME_TICK) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

function update() {
  updateGrid();
}

function draw() {
  gameBoard.innerHTML = '';
  drawGrid(gameBoard);
  drawUser(gameBoard);
  drawTree(gameBoard);
  drawTerrain(gameBoard);
}

export function start() {
  gameBoard = document.getElementById('game-board');
  window.requestAnimationFrame(main);
}
