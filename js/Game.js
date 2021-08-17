/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0,
        this.phrases = this.createPhrases()
        this.activePhrase = null
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        let phraseArray = [
            new Phrase ("Life is like a box of chocolates"),
            new Phrase ("We're going to need a bigger boat"),
            new Phrase ("No, I am your father"),
            new Phrase ("Say what again"),
            new Phrase ("Fear is the mindkiller")
        ]
        return phraseArray
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randomPhrase = Math.floor(Math.random() * this.phrases.length -1) + 1
        return this.phrases[randomPhrase]
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        let startDiv = document.querySelector('#overlay')
        startDiv.style.display = 'none'
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
        this.missed = 0
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        if (document.querySelectorAll('.hide').length == 0) {
            return true
        } else {
            return false
        }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const removeHeart = document.querySelectorAll('.tries img')[this.missed];
        removeHeart.src = 'images/lostHeart.png'
        if (this.missed < 5) {
            this.missed ++
        }
        if (this.missed == 5) {
            this.gameOver('loss')
        }

    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        let overlay = document.getElementById('overlay')
        overlay.style.display = 'flex';
        if (outcome == 'win') {
            document.querySelector('h1').textContent = `Congrats, you won!`
            overlay.className = 'win'
        } else {
            document.querySelector('h1').textContent = `Sorry, game over!`
            overlay.className = 'lose'
        }
        document.querySelector('#phrase ul').innerHTML = ''
        resetKeys(); 
        const replaceHeart = document.querySelectorAll('.tries img')
        replaceHeart.forEach(heart => heart.src = 'images/liveHeart.png') 
        // game = undefined; 
    }

    handleInteraction(letter) {
        let key = document.querySelector(`.key.${letter}`)
        if (!key.disabled) {
            key.disabled = true
            if (this.activePhrase.checkLetter(letter)) {
                key.classList.add('chosen')
                this.activePhrase.showMatchedLetter(letter);
                if (this.checkForWin()){
                    this.gameOver('win')
                }
            } else {
                key.classList.add('wrong')
                this.removeLife()
            }
        }
    }
}