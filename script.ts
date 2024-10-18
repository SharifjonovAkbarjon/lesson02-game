const firstButton = document.querySelector<HTMLButtonElement>(
  ".firstButton"
) as HTMLButtonElement;
const secondButton = document.querySelector<HTMLButtonElement>(
  ".secondButton"
) as HTMLButtonElement;

const firstScoreDisplay = document.querySelector<HTMLElement>(
  ".firstScore"
) as HTMLElement;
const secondScoreDisplay = document.querySelector<HTMLElement>(
  ".secondScore"
) as HTMLElement;
const resultDisplay = document.querySelector<HTMLElement>(
  ".result"
) as HTMLElement;
const winnerDisplay = document.querySelector<HTMLElement>(
  ".winner"
) as HTMLElement;

let firstCount: number = 0;
let secondCount: number = 0;

const randomNumber = (player: "first" | "second"): void => {
  const current: number = +(Math.random() * 10).toFixed();

  if (player === "first") {
    firstCount += current;
    firstScoreDisplay.textContent = firstCount.toString();
    firstButton.disabled = true;
    secondButton.disabled = false;
  } else if (player === "second") {
    secondCount += current;
    secondScoreDisplay.textContent = secondCount.toString();
    secondButton.disabled = true;
    firstButton.disabled = false;
  }

  checkWinner();
};

const checkWinner = (): void => {
  if (firstCount >= 100) {
    displayWinner("Победитель - Игрок 1");
  } else if (secondCount >= 100) {
    displayWinner("Победитель - Игрок 2");
  }
};

const displayWinner = (message: string): void => {
  winnerDisplay.textContent = message;
  resultDisplay.style.display = "block";
  firstButton.disabled = true;
  secondButton.disabled = true;
};

secondButton.disabled = true;

firstButton.addEventListener("click", () => randomNumber("first"));
secondButton.addEventListener("click", () => randomNumber("second"));
