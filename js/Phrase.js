class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

  //Display a random phrase from the array
  
	addPhraseToDisplay() {
		const splitPhrase = this.phrase.split('');
		const phraseContainer = document.getElementById('phrase');
		splitPhrase.forEach(character => {
			let spaceCharacter = '<li class="space"> </li>'
			let letterCharacter = `<li class="hide letter ${character}">${character}</li>`
			if (character === ' ') {
				phraseContainer.querySelector('ul').insertAdjacentHTML('beforeend', spaceCharacter);
			} else {
				phraseContainer.querySelector('ul').insertAdjacentHTML('beforeend', letterCharacter);
			}
		})
	}
  
    //Check the letter guessed against the splitPhrase characters
  
	checkLetter(guessedLetter) {
		const splitPhrase = this.phrase.split('');
		if (splitPhrase.includes(guessedLetter)) {
			return true;
		}
	}
    
    //If the letter is included in splitPhrase, show it in the main game

	showMatchedLetter(matchedLetter) {
		const letters = document.getElementsByClassName(matchedLetter);
		for (let i = 0; i < letters.length; i++) {
			letters[i].classList.replace('hide', 'show');
		}
	}
}