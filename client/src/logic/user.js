import { sectorChange, updateSector, tileBlocked } from './grid.js';

export let GAME_TICK = 5;

const user = [
    {
        s: 1,
        x: 11,
        y: 11,
        deg: 0,
        stride: 0,
        boots: 'boots1',
        legs: 'legs1',
        arms: 'arms1',
        chest: 'chest1',
        head: 'head1',
        weapon: undefined
    }
];

let nextStride = false;

export function update() {
    // update user array to server (post)
    // saveUserData()
}

export function draw(gameBoard) {
    // fetch all players where isOnline === true
    user.forEach(segment => {
        const boots = document.createElement('img');
        boots.src = `img/player/${segment.boots}_${segment.stride}.png`;
        boots.style.gridRowStart = segment.y;
        boots.style.gridColumnStart = segment.x;
        boots.style.transform = `rotate(${segment.deg}deg)`;
        gameBoard.appendChild(boots);
        const legs = document.createElement('img');
        legs.src = `img/player/${segment.legs}_${segment.stride}.png`;
        legs.style.gridRowStart = segment.y;
        legs.style.gridColumnStart = segment.x;
        legs.style.transform = `rotate(${segment.deg}deg)`;
        gameBoard.appendChild(legs);
        const arms = document.createElement('img');
        arms.src = `img/player/${segment.arms}_0.png`;
        arms.style.gridRowStart = segment.y;
        arms.style.gridColumnStart = segment.x;
        arms.style.transform = `rotate(${segment.deg}deg)`;
        gameBoard.appendChild(arms);
        const chest = document.createElement('img');
        chest.src = `img/player/${segment.chest}_0.png`;
        chest.style.gridRowStart = segment.y;
        chest.style.gridColumnStart = segment.x;
        chest.style.transform = `rotate(${segment.deg}deg)`;
        gameBoard.appendChild(chest);
        const head = document.createElement('img');
        head.src = `img/player/${segment.head}_0.png`;
        head.style.gridRowStart = segment.y;
        head.style.gridColumnStart = segment.x;
        head.style.transform = `rotate(${segment.deg}deg)`;
        gameBoard.appendChild(head);
    })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function calcPlayerStride() {
    if (!nextStride) {
        nextStride = true;
        user[0].stride = 1;
    } else {
        nextStride = false;
        user[0].stride = 2;
    }
}

export function onCar(position) {
    return user.some(segment => {
        return equalPositions(segment, position)
    })
}

function getPlayerPosition() {
    return user[0];
}

export function getPlayerSector() {
    return user[0].s;
}

export function moveUser(inputDirection) {
    calcPlayerStride();
    user[0].x += inputDirection.x;
    user[0].y += inputDirection.y;
    user[0].deg = inputDirection.deg;

    if (tileBlocked(getPlayerPosition())) {
        user[0].x -= inputDirection.x;
        user[0].y -= inputDirection.y;
        user[0].stride = 0;
        return
    }

    if (sectorChange(getPlayerPosition())) {
        let newCarPosition = updateSector(user);
        user[0].s = newCarPosition.s;
        user[0].x = newCarPosition.x;
        user[0].y = newCarPosition.y;
        console.log(`s: ${user[0].s} ,x: ${user[0].x} ,y: ${user[0].y} `);
    }
}

export function endUserStride() {
    user[0].stride = 0;
}