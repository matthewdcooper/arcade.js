function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.add = function(v) {
	this.x += v.x;
	this.y += v.y;
};

Vector.prototype.scale = function(C) {
    this.x *= C;
    this.y *= C;
};
