
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

// User's hand:
function playerHand() {
	let response = prompt("enter rock, paper, or scissor");
	response = response.toLowerCase();
	return response;
}

// rock beats scissor, rock loses to paper, rock ties rock
// paper beats rock, paper loses to scissor, paper ties paper
// scissor beats paper, scissor loses to rock, scissor ties scissor

// Simulates one game between user and computer
function playGame(playerSelection, computerSelection) { 

	let tieMessage = `Tie Time!`;
	let winMessage = `You win!`;
	let loseMessage = `You lose!`

	if (playerSelection == computerSelection) {
		return tieMessage;
	}

	if (playerSelection == "rock") {
		if (computerSelection == "scissor") {
			return winMessage;
		} else {
			return loseMessage;
		} 
	} 

	if (playerSelection == "paper") {
		if (computerSelection == "rock") {
			return winMessage;
		} else {
			return loseMessage;
		}
	 }

	 if (playerSelection == "scissor") {
	 	if (computerSelection == "paper") {
	 		return winMessage;
	 	} else {
	 		return loseMessage;
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


