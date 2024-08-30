window.addEventListener('load', init);

let guess;
let btnTooHigh = document.querySelector('#too-high');
let btnTooLow = document.querySelector('#too-low');
let btnCorrect = document.querySelector('#correct');
let btnRestart = document.querySelector('#btn-restart');

function init() {
    document.querySelector('#btn-start').addEventListener('click', makeGuess);
    toggleFeedBackButtons(true);
    addBtnEvents();
}

function makeGuess() {
    toggleStartButton(true);
    document.querySelector('#btn-start').removeEventListener('click', makeGuess);
    toggleFeedBackButtons(false);
    guess = generateNumber();
    displayWrongGuess(guess);
}

function displayWrongGuess() {
    const addHTML = /*html*/ `
    <li> Mr. Robot guesses ${guess} is this the number</li>
    `;
    document.querySelector('#guesses').insertAdjacentHTML('beforeend', addHTML);
}

function toggleStartButton(isHidden) {
    const btn = document.querySelector('#btn-start');
    btn.hidden = isHidden;
}

function toggleFeedBackButtons(isHidden) {
    btnTooLow.hidden = isHidden;
    btnTooHigh.hidden = isHidden;
    btnCorrect.hidden = isHidden;
}

function addBtnEvents() {
    btnTooLow.addEventListener('click', makeGuess);
    btnTooHigh.addEventListener('click', makeGuess);
    btnCorrect.addEventListener('click', displayCorrectGuess);
    btnRestart.addEventListener('click', restartGame);
}

function displayCorrectGuess() {
    const addHTML = /*html*/ `
    <p>✅Great success - Mr Robot won - the number is ${guess} ?</p>
`;
    document.querySelector('#display-success').insertAdjacentHTML('beforeend', addHTML);
    toggleFeedBackButtons(true);
}

function generateNumber() {
    return Math.floor(Math.random() * 10);
}

function restartGame() {
    toggleStartButton(false);
    toggleFeedBackButtons(true);
    clearGuesses();
    init();
}

function clearGuesses() {
    const guessList = document.querySelector('#guesses');
    const correctGuess = document.querySelector('#display-success');
    guessList.innerHTML = '';
    correctGuess.innerHTML = '';
}
