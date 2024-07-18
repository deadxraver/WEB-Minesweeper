init();

let fieldHashMap = new Map();

function init() {

	window.addEventListener("DOMContentLoaded", event => {
		const el = document.querySelector('.buttons');
		if (el) {
			el.addEventListener('click', event => {
				let minesweeper = document.getElementById('gameSpace');
				let select = document.getElementById('difficulty');
				minesweeper.innerHTML = '';
				minesweeper.className = "game";
				minesweeper.id = "minesweeper";
				minesweeper.innerHTML = "";
				startGame(select.value);
			}, false);
		} else alert('ну опять!');
	});
}


function startGame(difficulty) {

}