function Apple(size) {
	this.size = size;
	this.move();
}

Apple.prototype.move = function() {
	this.position = randomPosition(this.size);
};

Apple.prototype.render = function() {
	ctx.fillStyle = "#c94a18";
	ctx.fillRect(this.position.x, this.position.y,
				   this.size, this.size);
	ctx.strokeRect(this.position.x, this.position.y,
				   this.size, this.size);
};
