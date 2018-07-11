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
			return;
		} else {
			displayMessage(loseMessage);
			return;
		}
	 }

	 if (playerSelection == "scissor") {
	 	if (computerSelection == "paper") {
	 		displayMessage(winMessage);
	 	} else {
	 		displayMessage(loseMessage);
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

	// Simulate five consecutive games, recording each result and showing a winner at the end.
	// function playSeries() { 
	// 	let playerScore = 0; //
	// 	let computerScore = 0; //

	// 	let round1 = playGame(playerHand(), computerHand());
	// 	if (round1 == `You win!`) {
	// 		playerScore += 1;
	// 	} else if (round1 == `You lose!`) {
	// 		computerScore += 1;
	// 	}
	// 	console.log(round1);

	// 	let round2 = playGame(playerHand(), computerHand());
	// 	if (round2 == `You win!`) {
	// 		playerScore += 1;
	// 	} else if (round2 == `You lose!`) {
	// 		computerScore += 1;
	// 	}
	// 	console.log(round2);

	// 	let round3 = playGame(playerHand(), computerHand());
	// 	if (round3 == `You win!`) {
	// 		playerScore += 1;
	// 	} else if (round3 == `You lose!`) {
	// 		computerScore += 1;
	// 	}
	// 	console.log(round3);	

	// 	let round4 = playGame(playerHand(), computerHand());
	// 	if (round4 == `You win!`) {
	// 		playerScore += 1;
	// 	} else if (round4 == `You lose!`) {
	// 		computerScore += 1;
	// 	}
	// 	console.log(round4);	

	// 	let round5 = playGame(playerHand(), computerHand());
	// 	if (round5 == `You win!`) {
	// 		playerScore++;
	// 	} else if (round5 == `You lose!`) {
	// 		computerScore++;
	// 	}
	// 	console.log(round5);

	// 	let score = "you: " + playerScore + " computer: " + computerScore;
	// 	console.log(score);
	// 	if (playerScore > computerScore) {
	// 		console.log("you won the game!");
	// 	} else if (playerScore < computerScore) {
	// 		console.log("you lost to the machine");
	// 	} else {
	// 		console.log("It was a tie!");
	// 	}
	// }

// console.log(playGame(playerHand(), computerHand()));


