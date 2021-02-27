import { tree } from './tree.js';
import { terrain } from './terrain.js';
import { getPlayerSector } from './user.js';

const GRID_SIZE = 21;
export let sector = 1;

export function update() {
    sector = getPlayerSector();
}

export function draw(gameBoard) {
    // sectorBackground(gameBoard);
}

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function outsideGrid(position) {
    return position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE;
}

export function tileBlocked(position) {
    var test = tree.some(tile => {
        return position.s === tile.s && position.x === tile.x && position.y === tile.y && tile.b === 1;
    });
    var test2 = terrain.some(tile => {
        return position.s === tile.s && position.x === tile.x && position.y === tile.y && tile.b === 1;
    });
    return test || test2;
}

export function sectorChange(position) {
    return position.x === 22 || position.y === 22 || position.x === 0 || position.y === 0;
}

export function updateSector(position) {
    if (position[0].x === 0) {
        sector -= 1;
        return { s: sector, x: 21, y: position[0].y }
    }
    if (position[0].x === 22) {
        sector += 1;
        return { s: sector, x: 1, y: position[0].y }
    }
    if (position[0].y === 0) {
        sector -= 3;
        return { s: sector, x: position[0].x, y: 21 }
    }
    if (position[0].y === 22) {
        sector += 3;
        return { s: sector, x: position[0].x, y: 1 }
    }
}

// function sectorBackground(gameBoard) {
//     if (sector === 1) {
//         gameBoard.style.backgroundColor = '#eeeeee';
//     } else {
//         gameBoard.style.backgroundColor = '#000000';
//     }
// }