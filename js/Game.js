/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
	constructor() {
		this.missed = 0;
		this.phrases = [
            new Phrase ("Life is like a box of chocolates"),
            new Phrase ("Were going to need a bigger boat"),
            new Phrase ("No I am your father"),
            new Phrase ("Say what again"),
            new Phrase ("Fear is the mind killer")
		];
		this.activePhrase = null;
	}

	//Start the game by selecting a random phrase from the list using getRandomPhrase
  
	startGame() {
		const gameOverlay = document.getElementById('overlay');
		gameOverlay.style.display = 'none';
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}

	//Choose a random phrase from the list

	getRandomPhrase() {
		const randomPhraseIndex = Math.floor(Math.random() * this.phrases.length);
		return this.phrases[randomPhraseIndex];
	}

	//Increment the missed variable, change the haeart icon, and check for a loss if this method is called

	removeLife() {
		this.missed += 1;
		const scoreboard = document.querySelector('#scoreboard ol').children;
		scoreboard[this.missed - 1].querySelector('img').src = 'images/lostHeart.png';
		if (this.missed === 5) {
			this.gameOver('lose');
		}
	}

	//Handle the proper response if a button is clicked that results in a correct or incorrect guess
	
	handleInteraction(button) {
		const letter = button.textContent;
		//const winner = this.checkForWin();
		button.disabled = true;
		if (this.activePhrase.checkLetter(letter)) {
			button.classList.add('chosen'); //add class name
			this.activePhrase.showMatchedLetter(letter);
			const winner = this.checkForWin();
			if (winner) {
				this.gameOver('win');
			}
		} else {
			button.classList.add('wrong'); // add class name
			this.removeLife();
		}
	}

	//method checks to see if all the letters in a phrase were guessed

	checkForWin() {
		const keyList = document.querySelector('#phrase ul').children;
		let showCharacterCount = 0;
		let spaceCharacterCount = 0;
		for (let i = 0; i < keyList.length; i++) {
			if (keyList[i].classList.contains('show')) {
				showCharacterCount += 1;
			} else if (keyList[i].classList.contains('space')) {
				spaceCharacterCount += 1;
			}
		}
		return (showCharacterCount + spaceCharacterCount) === keyList.length
	}

	//method to reset the game for another game

	resetGame() {
		const keyList = document.querySelector('#phrase ul');
		const keys = document.getElementsByClassName('key');
		const buttonReset = document.getElementById('btn__reset');
		const scoreboard = document.querySelector('#scoreboard ol').children;
	
		keyList.innerHTML = '';
		for (let i = 0; i < keys.length; i++) {
			keys[i].className = 'key';
			keys[i].disabled = false;
		}
		buttonReset.textContent = 'Play Again';
		for (let i = 0; i < scoreboard.length; i++) {
			scoreboard[i].querySelector('img').src = 'images/liveHeart.png';
		}
	}
	
	//method manages the display of you win/lose overlay

	gameOver(gameStatus) {
		const gameOverlay = document.getElementById('overlay');
		const gameOverMessage = document.getElementById('game-over-message');
		const overlay = document.getElementById('overlay');
		const currentOverlayClass = overlay.className;
		
    document.removeEventListener('keyup', eventHandler);
		gameOverlay.style.display = 'block';
		
    if (gameStatus == 'lose') {
			gameOverMessage.textContent = 'Sorry, Game Over!';
		} else if (gameStatus === 'win') {
			gameOverMessage.textContent = 'Congrats! You Win!';
		}
		overlay.classList.replace(currentOverlayClass, gameStatus);
		this.resetGame();
	}
}