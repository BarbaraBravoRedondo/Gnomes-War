'use strict';

// Variables
const plant = document.querySelector('.js-plant');
const fire = document.querySelector('.js-fire');
const aqua = document.querySelector('.js-aqua');

const msg = document.querySelector('.js-msg');
const player = document.querySelector('.js-player');
const computer = document.querySelector('.js-computer');

const playerChoiceDisplay = document.querySelector('.js-player-choice');
const computerChoiceDisplay = document.querySelector('.js-computer-choice');
const playerLivesDisplay = document.querySelector('.js-player');
const computerLivesDisplay = document.querySelector('.js-computer');

const playerImg = document.querySelector('.js-player-img');
const computerImg = document.querySelector('.js-computer-img');

let playerWins = 0;
let computerWins = 0;
let moves = 0;

// Functions

function scores() {
    player.innerHTML = 'GNÓMADA: ' + playerWins;
    computer.innerHTML = 'GNOMÓTICO: ' + computerWins;
}

function compare(playerChoice) {
    const computerChoice = getLuck();
    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;
    // playerImg.src = `${playerChoice}.png`;
    // computerImg.src = `${computerChoice}.png`;
    playerLivesDisplay.textContent = 'GNÓMADA - ' + ' ' + playerWins;
    computerLivesDisplay.textContent = 'GNOMÓTICO - ' + computerWins;

    if (playerChoice !== "") {
        moves++;
    } 

    if (playerChoice === computerChoice) {
        msg.innerHTML = 'GNOMOEMPATADOS';
    } else if (
        (playerChoice === '🍃' && computerChoice === '💧') ||
        (playerChoice === ' 🔥' && computerChoice === '🍃') ||
        (playerChoice === '💧' && computerChoice === '🔥')
    ) {
        msg.innerHTML = 'GANASTE';
        player.innerHTML = 'GNOMADA - ' + ' ' + ++playerWins;
    } else {
        msg.innerHTML = ' PERDISTE ';
        computer.innerHTML = 'GNOMÓTICO -'+ ' '  + ++computerWins;
    }
    console.log(computerChoice);
    console.log(playerChoice);
}

function getLuck() {
    const randomNum = getRandomNumber(9);
    if (randomNum <= 3) {
        return '🍃';
    } else if (randomNum <= 7) {
        return '🔥';
    } else {
        return '💧';
    }
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function handleClickPlay(playerChoice) {
    compare(playerChoice);
}

// Events
plant.addEventListener('click', function () {
    handleClickPlay('🍃');
});

fire.addEventListener('click', function () {
    handleClickPlay('🔥');
});

aqua.addEventListener('click', function () {
    handleClickPlay('💧');
});

btn.addEventListener('click', function (event) {
    event.preventDefault();
    compare();
});


