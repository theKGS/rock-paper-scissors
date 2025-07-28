
const map = new Map();
map.set("rock", 0);
map.set("paper", 1);
map.set("scissors", 2);

let humanScore = 0;
let computerScore = 0;

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const scoreDiv = document.querySelector("#score")

scoreDiv.textContent = "Score: 0 - 0";

btn1.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

btn2.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

btn3.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
    const r = Math.floor(Math.random() * 3);
    switch(r) {
        case 0:
        return "rock"
        case 1:
        return "paper";
        default:
        return "scissors";
    }
}

/*
  Not necessarily an obvious implementation. I wanted to avoid lots
  of conditionals, so I opted to make the computer's choice of move
  an offset relative to the players choice, which is "fixed" as rock.
*/
function playRound(humanChoice, computerChoice) {
    let numChoiceH = map.get(humanChoice);
    let numChoiceC = map.get(computerChoice);

    numChoiceC = numChoiceC - numChoiceH;
    if (numChoiceC < 0) {
        numChoiceC += 3;
    }

    switch (numChoiceC) {
        case 1:
            computerScore += 1;
            break;
        default:
            humanScore += 1;
    }

    scoreDiv.textContent = "Score: " + humanScore + " " + computerScore;
}