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
			return "powder";
		default:
			return "snowboard";
	}
}

let tieMessage = `It's a tie!`;
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
			break;
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
	let tie = `Machine also chose ${computerSelection}. ${tieMessage}`;
	let win = `Machine chose ${computerSelection}. ${winMessage}`;
	let lose = `Machine chose ${computerSelection}. ${loseMessage}`;
	if (playerSelection == computerSelection) {
		displayMessage(tie);
		displayScore(tieMessage);
		return;
	}

	if (playerSelection == "rock") {
		if (computerSelection == "snowboard") {
			displayMessage(win);
			displayScore(winMessage);
			return;
		} else {
			displayMessage(lose);
			displayScore(loseMessage);
			return;
		} 
	} 

	if (playerSelection == "powder") {
		if (computerSelection == "rock") {
			displayMessage(win);
			displayScore(winMessage);
			return;
		} else {
			displayMessage(lose);
			displayScore(loseMessage);
			return;
		}
	 }

	 if (playerSelection == "snowboard") {
	 	if (computerSelection == "powder") {
	 		displayMessage(win);
	 		displayScore(winMessage);
	 	} else {
	 		displayMessage(lose);
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