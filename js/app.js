let game

const startGameListener = document.getElementById('btn__reset');
const keys = document.getElementsByClassName('key');

//Handles if a player use the keyboard instead of mouse

let eventHandler = function(e) {
	let keyPress = e.key;
	for (let i = 0; i < keys.length; i++) {
		if (keys[i].innerHTML === keyPress) {
			if (keys[i].disabled) {
				continue
			} else {
				game.handleInteraction(keys[i]);
			}
		}
	}
}

//Resets the game to the default state if the game is manually reset

startGameListener.addEventListener('click', () => {
  game = new Game();
	game.startGame();
	document.addEventListener('keyup', eventHandler);
})
for (let i = 0; i < keys.length; i++) {
	keys[i].addEventListener('click', (e) => {
		game.handleInteraction(e.target);
	})
}