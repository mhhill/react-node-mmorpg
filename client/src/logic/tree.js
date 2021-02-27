import { sector } from './grid.js';

export let tree = [
    { s: 1, x: 5, y: 5, b: 1 },
    { s: 4, x: 14, y: 14, b: 1 }
];

export function update() {

}

export function draw(gameBoard) {
    tree.forEach((item) => {
        if (sector === item.s) {
            const treeElement = document.createElement('img');
            treeElement.src = 'img/tree.png';
            treeElement.style.gridRowStart = item.y;
            treeElement.style.gridColumnStart = item.x;
            gameBoard.appendChild(treeElement);
        }
    });
}