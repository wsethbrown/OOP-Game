/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game = ''
const startGameButton = document.getElementById('btn__reset')

startGameButton.addEventListener('click', () => {
    game = new Game
    game.startGame()
})