import { sector } from './grid.js';
import { tree } from './tree.js';

export let terrain = [
    { s: 1, x: 1, y: 1, b: 1, img: 'img/terrain/cave_wall_left_01.png' },
    { s: 1, x: 1, y: 2, b: 1, img: 'img/terrain/cave_wall_left_02.png' },
    { s: 1, x: 1, y: 3, b: 1, img: 'img/terrain/cave_wall_left_03.png' },
    { s: 1, x: 1, y: 4, b: 1, img: 'img/terrain/cave_wall_left_04.png' },
    { s: 1, x: 1, y: 5, b: 1, img: 'img/terrain/cave_wall_left_02.png' },
    { s: 1, x: 1, y: 6, b: 1, img: 'img/terrain/cave_wall_left_03.png' },
    { s: 1, x: 1, y: 7, b: 1, img: 'img/terrain/cave_wall_left_04.png' },
    { s: 1, x: 2, y: 1, b: 1, img: 'img/terrain/cave_wall_top_04.png' },
    { s: 1, x: 3, y: 1, b: 1, img: 'img/terrain/cave_wall_top_03.png' },
    { s: 1, x: 4, y: 1, b: 1, img: 'img/terrain/cave_wall_top_02.png' },
    { s: -2, x: 1, y: 21, b: 1, img: 'img/terrain/cave_wall_bottom_01.png' },
    { s: -2, x: 2, y: 21, b: 1, img: 'img/terrain/cave_wall_bottom_02.png' },
    { s: -2, x: 3, y: 21, b: 1, img: 'img/terrain/cave_wall_bottom_03.png' },
    { s: -2, x: 4, y: 21, b: 1, img: 'img/terrain/cave_wall_bottom_04.png' },
    { s: -2, x: 1, y: 20, b: 1, img: 'img/terrain/cave_wall_left_04.png' }
];

export function update() {

}

export function draw(gameBoard) {
    terrain.forEach((item) => {
        if (sector === item.s) {
            const terrainElement = document.createElement('img');
            terrainElement.src = item.img;
            terrainElement.style.gridRowStart = item.y;
            terrainElement.style.gridColumnStart = item.x;
            gameBoard.appendChild(terrainElement);
        }
    });
}

export function hitTree(position) {
    return tree.some(segment => {
        return equalPositions(segment, position)
    });
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}
