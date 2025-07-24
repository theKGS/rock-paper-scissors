
const map = new Map();
map.set("rock", 0);
map.set("paper", 1);
map.set("scissors", 2);

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

function getHumanChoice() {
    const r = prompt();
    return r.toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    let numChoiceH = map.get(humanChoice);
    let numChoiceC = map.get(computerChoice);

    numChoiceC = numChoiceC - numChoiceH;
    if (numChoiceC < 0) {
        numChoiceC += 3;
    }

    switch (numChoiceC) {
        case 0:
            console.log("draw");
            break;
        case 1:
            humanScore += 1;
            console.log("computer wins");
            break;
        default:
            computerScore += 1;
            console.log("player wins");
        }
    }

    for (let rounds = 0; rounds < 5; rounds++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();