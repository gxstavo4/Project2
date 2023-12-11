let wins = 0;
let ties = 0;
let losses = 0;

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    switch (userChoice) {
        case 'rock':
        case 'paper':
        case 'scissors':
            determineWinner(userChoice, computerChoice);
            break;
        default:
            console.error("Invalid choice. Please choose rock, paper, or scissors.");
    }
}

function determineWinner(userChoice, computerChoice) {
    let result;

    if (userChoice === computerChoice) {
        ties++;
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        wins++;
        result = "You win!";
    } else {
        losses++;
        result = "You lose!";
    }

    updateScore(result);
}

function updateScore(result) {
    document.getElementById('wins').innerText = wins;
    document.getElementById('ties').innerText = ties;
    document.getElementById('losses').innerText = losses;

    const resultMessage = document.createElement('p');
    resultMessage.innerText = result;
    
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
    resultContainer.appendChild(resultMessage);
}
