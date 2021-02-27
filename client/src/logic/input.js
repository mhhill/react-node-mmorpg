import { moveUser, endUserStride } from './user.js';

let inputDirection = { x: 0, y: 0, deg: 0 }
let canMove = false;

setInterval(function () {
    canMove = true;
}, 500);

window.addEventListener('keydown', e => {
    if (!canMove) return
    canMove = false;
    switch (e.key) {
        case 'ArrowUp':
            inputDirection = { x: 0, y: -1, deg: 0 };
            moveUser(inputDirection);
            break
        case 'ArrowDown':
            inputDirection = { x: 0, y: 1, deg: 180 };
            moveUser(inputDirection);
            break
        case 'ArrowLeft':
            inputDirection = { x: -1, y: 0, deg: 270 };
            moveUser(inputDirection);
            break
        case 'ArrowRight':
            inputDirection = { x: 1, y: 0, deg: 90 };
            moveUser(inputDirection);
            break
    }
});

window.addEventListener('keyup', e => {
    switch (e.key) {
        case 'ArrowUp':
            endUserStride();
            break
        case 'ArrowDown':
            endUserStride();
            break
        case 'ArrowLeft':
            endUserStride();
            break
        case 'ArrowRight':
            endUserStride();
            break
    }
});