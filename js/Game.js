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
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        let gameWon = 0
        let remainingLetters = document.querySelectorAll('.hide')
        if (gameWon === remainingLetters.length) {
            return gameWon = true
        } else {
            return gameWon = false
        }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const scoreboard = document.querySelectorAll('#scoreboard ol li')
        const keyboard = document.querySelectorAll('.key')
        const hearts = scoreboard.img
        const missed = 0

        for (let i = 0; i < keyboard.length; i++) {
            if ()
        }

    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        console.log(gameWon)
        if (gameWon) {
            startDiv.innerHTML = '<h1>You have won!</h1>'
        } else {
            startDiv.innerHTML = '<h1>Sorry, you lost!</h1>'
        }
    }

    handleInteraction() {
        checkLetter()
        showMatchedLetter()
        checkForWin()
        removeLife()
        gameOver()
    }
}