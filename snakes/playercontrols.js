

function mapArrowsToSnake(snake) {
	
	function arrowPress(e) {
		switch(e.keyCode) {
			case 37:
				snake.goLeft();
				break;
			case 38:
				snake.goUp();
				break;
			case 39:
				snake.goRight();
				break;
			case 40:
				snake.goDown();
				break;
		}
	}
	
	window.addEventListener("keypress", arrowPress, false);
	
}

function mapWasdToSnake(snake) {
	
	function wasdPress(e) {
		switch(e.keyCode) {
			case 65:
				snake.goLeft();
				break;
			case 87:
				snake.goUp();
				break;
			case 68:
				snake.goRight();
				break;
			case 83:
				snake.goDown();
				break;
		}
	}
	
	window.addEventListener("keydown", wasdPress, false);
	
}


