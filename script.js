window.onload = function() {
	var canvas = document.getElementById('canvas');
	var position = new Array(17); // Créer un tableau pour gérer les coordonnées
	var snake = [];

	for (var x = 0; x < position.length; x++) {
		position[x] = new Array();

		for (var y = 0; y < position.length; y++) {
			position[x][y] = document.createElement('div');
			position[x][y].classList.add('unitCase')
			canvas.appendChild(position[x][y]);
		}
	}
	
	// Création du snake par défaut au lancement du jeu
	snake[0] = new Snake(8, 8);
	snake[1] = new Snake(8, 7);
	snake[2] = new Snake(8, 6);
	
	// Pour afficher update dirrectement l'affichage du snake
	updateSnake(snake);

	// Récupère l'appuie d'une touche
	document.onkeydown = function(btnPress) {
		snake[0].moveDirection(btnPress.keyCode);
	}
	
	function updateSnake(snake) {
		for(var i = 0; i < snake.length; i++) {
			snake[i].updateSnakePosition();
		}
	}
}



