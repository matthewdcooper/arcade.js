


function giveBasicAi(snake) {
	snake.ai = true;
	snake.think = function () {
		
		function chooseTarget() {
			var i = Math.floor(Math.random()*apples.length);
			return apples[i];
		}

		function chooseRandomDirection() {
			var r = Math.random();
			if 		(r < 0.25) { snake.goLeft();  } 
			else if (r < 0.50) { snake.goUp();    } 
			else if (r < 0.75) { snake.goRight(); } 
			else 			   { snake.goDown();  }
						  
			if (r < 0.25) { 
				snake.goLeft();  
			} else if (r < 0.50) { 
				snake.goUp();    
			} else if (r < 0.75) { 
				snake.goRight(); } 
			else { 
				snake.goDown(); 
			}
		}

		function chooseDirection() {
			
			if (snake.body[0].y < snake.target.position.y) {			
				snake.goDown();
			} else if (snake.body[0].y > snake.target.position.y) {
				snake.goUp();
			} else if (snake.body[0].x < snake.target.position.x) {
				snake.goRight();
			} else if (snake.body[0].x > snake.target.position.x) {
				snake.goLeft();
			}
			
			// attempt to avoid collisions with self
			attempts = 0;
			while (snake.willCollideWithSelf() && attempts < 20) {
				chooseRandomDirection();
				attempts++;
			}

			function willCollideWithSomeSnake() {
				for (var i = 0; i < snakes.length; i++) {
					if (snake == snakes[i]) continue;
					if (snake.willCollideWithSnake(snakes[i])) return true;
				}
				return false;
			}

			// attempt to avoid collisions with snake
			attempts = 0;
			while (willCollideWithSomeSnake() && attempts < 200) {
				chooseRandomDirection();
				attempts++;
			}
		}
		
		if (!snake.target) snake.target = chooseTarget();
		chooseDirection();

		
		
	
	};
	
}


