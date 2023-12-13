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

const mushrooms = document.querySelectorAll('.js-mushroom mushroom')

let playerWins = 0;
let computerWins = 0;
let moves = 0;
let playerLives = 3;
// Functions

function scores() {
    player.innerHTML = 'GNÓMADA: ' + playerWins;
    computer.innerHTML = 'GNOMÓTICO: ' + computerWins;
}
function resetGame() {
    playerWins = 0;
    computerWins = 0;
    moves = 0;
    player.innerHTML = 'GNÓMADA - ' + playerWins;
    computer.innerHTML = 'GNOMÓTICO - ' + computerWins;
}
function compare(playerChoice) {
    const computerChoice = getLuck();
    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;""
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
        player.innerHTML = 'GNÓMADA - ' + ' ' + ++playerWins;
    } else {
        msg.innerHTML = ' PERDISTE ';
        computer.innerHTML = 'GNOMÓTICO -'+ ' '  + ++computerWins;
    }
    if (playerWins === 5) {
        msg.innerHTML = '~ ERES EL REY DE GNOMOS ~';
        resetGame();
    } else if (computerWins === 5) {
        msg.innerHTML = '> GAME OVER <';
        resetGame();
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


