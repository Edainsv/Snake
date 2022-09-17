window.onload = function() {
	var canvas = document.getElementById('canvas');
	var position = new Array(17); // Créer un tableau pour gérer les coordonnées

	// Récupère l'appuie d'une touche
	document.onkeydown = function(btnPress) {
		snake.moveDirection(btnPress.keyCode);
	}

	// Attribution des "pixels" dans le canvas
	for (var x = 0; x < position.length; x++) {
		position[x] = new Array();

		for (var y = 0; y < position.length; y++) {
			position[x][y] = document.createElement('div');
			position[x][y].classList.add('unitCase')
			canvas.appendChild(position[x][y]);
		}
	}
	position[8][8].classList.add('currentSnakePos');

	var snake = new Snake(8, 8);


}



