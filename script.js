"use strict";
const firstButton = document.querySelector(".firstButton");
const secondButton = document.querySelector(".secondButton");
const firstScoreDisplay = document.querySelector(".firstScore");
const secondScoreDisplay = document.querySelector(".secondScore");
const resultDisplay = document.querySelector(".result");
const winnerDisplay = document.querySelector(".winner");
let firstCount = 0;
let secondCount = 0;
const randomNumber = (player) => {
    const current = +(Math.random() * 10).toFixed();
    if (player === "first") {
        firstCount += current;
        firstScoreDisplay.textContent = firstCount.toString();
        firstButton.disabled = true;
        secondButton.disabled = false;
    }
    else if (player === "second") {
        secondCount += current;
        secondScoreDisplay.textContent = secondCount.toString();
        secondButton.disabled = true;
        firstButton.disabled = false;
    }
    checkWinner();
};
const checkWinner = () => {
    if (firstCount >= 100) {
        displayWinner("Победитель - Игрок 1");
    }
    else if (secondCount >= 100) {
        displayWinner("Победитель - Игрок 2");
    }
};
const displayWinner = (message) => {
    winnerDisplay.textContent = message;
    resultDisplay.style.display = "block";
    firstButton.disabled = true;
    secondButton.disabled = true;
};
secondButton.disabled = true;
firstButton.addEventListener("click", () => randomNumber("first"));
secondButton.addEventListener("click", () => randomNumber("second"));
