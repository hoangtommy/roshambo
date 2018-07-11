const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', playGame)//(e) => {
		// console.log(e.target.id);
		// if (e.target.id == 'rock')
	// });
});

// Computer's hand:
function computerHand() {
	let number = Math.round(Math.random()*2 + 1);
	switch (number) {
		case 1:
			return "rock";
		case 2:
			return "paper";
		default:
			return "scissor";
	}
}

let tieMessage = `Tie Time!`;
let winMessage = `You win!`;
let loseMessage = `You lose!`;
let playerScore = 0;
let computerScore = 0;

function displayMessage(message) {
	let results = document.querySelector('#resultsdiv');
	let resultsContent = document.createElement('p');
	resultsContent.textContent = message;
	results.appendChild(resultsContent);
}

let scoreboard = document.querySelector('#scoreboard');
let score = document.createElement('p');
scoreboard.appendChild(score);

function displayScore(result) {
	switch (result) {
		case winMessage:
			playerScore += 1;
		case loseMessage:
			computerScore += 1;
	}
	score.textContent = `You: ${playerScore} Machine: ${computerScore}`;

	if (playerScore === 5) {
		alert(`You won ${playerScore} to ${computerScore}`);
	} else if (computerScore === 5) {
		alert(`The Machine won ${computerScore} to ${playerScore}`);
	}
}

// Simulates one game between user and computer
function playGame(e) { 
	let playerSelection = e.target.id;
	let computerSelection = computerHand();

	if (playerSelection == computerSelection) {
		displayMessage(tieMessage);
		displayScore(tieMessage);
		return;
	}

	if (playerSelection == "rock") {
		if (computerSelection == "scissor") {
			displayMessage(winMessage);
			displayScore(winMessage);
			return;
		} else {
			displayMessage(loseMessage);
			displayScore(loseMessage);
			return;
		} 
	} 

	if (playerSelection == "paper") {
		if (computerSelection == "rock") {
			displayMessage(winMessage);
			displayScore(winMessage);
			return;
		} else {
			displayMessage(loseMessage);
			displayScore(loseMessage);
			return;
		}
	 }

	 if (playerSelection == "scissor") {
	 	if (computerSelection == "paper") {
	 		displayMessage(winMessage);
	 		displayScore(winMessage);
	 	} else {
	 		displayMessage(loseMessage);
	 		displayScore(loseMessage);
	 	}
	 }
}

// Keeps track of scores
function playRound(result) {
	if (result == `You win!`) {
		return 1;
	} else if (result == `You lose!`) {
		return -1;
	} 
}