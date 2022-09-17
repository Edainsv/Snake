// Classe Snake
class Snake {
	constructor(posX, posY) {
		this.currentDirrection = 0;
		this.posX = posX;
		this.posY = posY;
		this.position = new Array(17)
	}

	moveDirection(dirrection) {
		this.getPosition();
		this.position[this.posX][this.posY].classList.remove('currentSnakePos');

		switch (dirrection) {
			case 37: // Gauche
				this.currentDirrection = 'left';
				this.posY--;
				break;

			case 38: // Haut
				this.currentDirrection = 'top';
				this.posX--;
				break;

			case 39: // Droite
				this.currentDirrection = 'right';
				this.posY++;
				break;

			case 40: // Bas
				this.currentDirrection = 'down';
				this.posX++;
				break;
		}
		this.updateSnakePosition();
	}

	updateSnakePosition() {
		this.getPosition();

		this.position[this.posX][this.posY].classList.add('currentSnakePos');
	}

	getPosition() {
		// Récupère d'abord le tableau de positions
		var getPosition = document.querySelectorAll('.unitCase');
		var count = 0;

		for (var x = 0; x < this.position.length; x++) {
			this.position[x] = new Array();

			for (var y = 0; y < this.position.length; y++) {
				this.position[x][y] = getPosition[count];
				count++;			
			}
		}
	}
}