/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const splitPhrase = this.phrase.split('')
        const phraseDiv = document.querySelector('#phrase ul')

        splitPhrase.forEach(letter => {
            const spaceChar = '<li class="space"> </li>'
            const letterChar = `<li class="hide letter ${letter}">${letter}<li>`
            
            if (letter === ' ') {
                phraseDiv.insertAdjacentHTML('beforeend', spaceChar)
            } else {
                phraseDiv.insertAdjacentHTML('beforeend', letterChar)
            }
        })
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter)
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const correctLetter = document.querySelectorAll('#phrase ul li')
        for (let i = 0; i < correctLetter.length; i++) {
            if (correctLetter[i] === letter) {
                correctLetter.className('show')
            }
        }
    }
 }

