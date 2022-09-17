// Classe Snake
class Snake {
	constructor(posX, posY) {
		this.currentDirrection = 0;
		this.posX = posX;
		this.posY = posY;
		this.position = new Array(17)
		this.perdu = false;
	}

	moveDirection(dirrection) {
		this.getPosition();
		this.position[this.posX][this.posY].classList.remove('currentSnakePos');

		switch (dirrection) {
			case 37: // Gauche
				this.currentDirrection = 'left';
				this.posY--;

				if (this.posY < 0) {
					this.posY++;

					this.perdu = true;
				}
				break;

			case 38: // Haut
				this.currentDirrection = 'top';
				this.posX--;
				if (this.posX < 0) {
					this.posX++;

					this.perdu = true;
				}
				break;

			case 39: // Droite
				this.currentDirrection = 'right';
				this.posY++;

				if (this.posY > this.position.length - 1) {
					this.posY--;

					this.perdu = true;
				}
				break;

			case 40: // Bas
				this.currentDirrection = 'down';
				this.posX++;
				if (this.posX > this.position.length - 1) {
					this.posX--;

					this.perdu = true;
				}
				break;
		}
		this.updateSnakePosition();
		this.testLose(this.perdu);
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

	testLose() {
		if (this.perdu) {
			alert('Vous avez perdu !');

			this.position[this.posX][this.posY].classList.remove('currentSnakePos');
			this.posX = 8;
			this.posY = 8;
			this.position[this.posX][this.posY].classList.add('currentSnakePos');

			this.perdu = false;
		}
	}
}