function Snake(position, size, length, color) {
	this.alive = true;
	this.size = size;
	this.length = length;
    if (color) { this.color = color; } else { this.color = "#FFFFFF"; }
	this.makeBody(position.x, position.y);

	// directional vectors
	this.left = new Vector(-this.size, 0);
	this.up = new Vector(0, -this.size);
	this.right = new Vector(this.size, 0);
	this.down = new Vector(0, this.size);

	// initial direction
	this.direction = this.right;

	this.respawnTimer = 0;
}

Snake.prototype.makeBody = function(x, y) {
	this.body = [];
	for (var i = 0; i < this.length; i++) {
		this.body.push(new Vector(x, y));
		x-=this.size;
	}
};

Snake.prototype.goLeft = function() {
	if (this.direction != this.right) this.direction = this.left;
};

Snake.prototype.goUp = function() {
	if (this.direction != this.down) this.direction = this.up;
};

Snake.prototype.goRight = function() {
	if (this.direction != this.left) this.direction = this.right;
};

Snake.prototype.goDown = function() {
	if (this.direction != this.up) this.direction = this.down;
};

Snake.prototype.collides = function(v) {
	return (this.body[0].x == v.x &&
			this.body[0].y == v.y)
};

Snake.prototype.collidesWith = function(vArr) {
	for (var i = 0; i < vArr.length; i++) {
		if (this.body[0].x == vArr[i].x &&
			this.body[0].y == vArr[i].y) return true;
	}
	return false;
};


Snake.prototype.willCollideWithSnake = function(snake) {
	for (var i = 0; i < snake.body.length; i++) {
		if (this.body[0].x + this.direction.x == snake.body[i].x &&
			this.body[0].y + this.direction.y == snake.body[i].y) return true;
	}
	return false;
};


Snake.prototype.willCollideWithSelf = function() {
	for (var i = 1; i < this.body.length; i++) {
		if (this.body[0].x + this.direction.x == this.body[i].x &&
			this.body[0].y + this.direction.y == this.body[i].y) return true;
	}
	return false;
};


Snake.prototype.eat = function() {
	if (this.ai) delete this.target;
	this.body.push(this.body[this.body.length-1]);
};


Snake.prototype.die = function() {
	this.alive = false;
	this.respawnTimer = 10;
};


Snake.prototype.respawn = function() {
	var p = randomPosition(this.size);
	this.direction = this.right;
	this.makeBody(p.x, p.y);
	this.alive = true;
	this.respawnTimer = 0;
};


Snake.prototype.move = function() {
	var newX = this.body[0].x + this.direction.x;
	var newY = this.body[0].y + this.direction.y
	head = new Vector(newX, newY);
	this.body.unshift(head);
	this.body.pop();
};


Snake.prototype.screenWrap = function() {
	if (this.body[0].x > cnv.width-this.size) this.body[0].x = 0;
	if (this.body[0].x < 0) this.body[0].x = cnv.width;
	if (this.body[0].y > cnv.height-this.size) this.body[0].y = 0;
	if (this.body[0].y < 0) this.body[0].y = cnv.height;
};


Snake.prototype.update = function() {
	if (!this.alive) {
		this.respawnTimer--;
		return;
	}
	this.move();
	this.screenWrap();
	if (this.ai) this.think();
};


Snake.prototype.render = function() {
    ctx.fillStyle = this.color;
	for (var i in this.body) {
		ctx.fillRect(this.body[i].x, this.body[i].y,
					   this.size, this.size);
		ctx.strokeRect(this.body[i].x, this.body[i].y,
					   this.size, this.size);

	}
	ctx.stroke();
};
