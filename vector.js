/* A class for performing common operations on 2d vectors. */
// Uses radians for angles.

class Vector {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}


	add (v) {
		this.x += v.x;
		this.y += v.y;
		return this;
	}


	sub (v) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	}


	mult (scalar) {
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}


	div (scalar) {
		this.x /= scalar;
		this.y /= scalar;
		return this;

	}


	mag () { // find magnitude of vector
		return Math.sqrt(Math.abs(this.x)**2 + Math.abs(this.y)**2);
	}


	normalize () {
		let m = this.mag();
		if (m != 0) {
			return this.div(m);
		}
	}


	direction () {
		let d = Math.atan2(this.y, this.x);
		if (d >= 0) return d;
		return 2*Math.PI + d;
	}


	dot (v) {
		return this.x * v.x + this.y * v.y;
	}





}


function assert(condition, label) {
	if (!condition) console.log('assertion error: ' + label);
}

function test() {
	let v = new Vector(0, 0);
	assert(v.mag() === 0, 'zero vector magnitude is zero');
	assert(v.add(new Vector(2, 0)).x === 2, 'x component addition');
	assert(v.add(new Vector(0, 3)).y === 3, 'y component addition');
	assert(new Vector(3, 4).mag() === 5, 'magnitude of 3, 4 vector is 5');
	assert(v.sub(v).x === 0 && v.y === 0, 'subtraction of self is zero');
	assert(v.mult(2).x === 0 && v.y === 0, 'multiplication of zero is zero');
	assert(v.sub(new Vector(3, 5)).x === -3 && v.y === -5, 'subtraction of vector');
	assert(v.mult(3).x === -9 && v.y === -15, 'multiplication of negative vector');
	assert(v.div(-2).x === 4.5 && v.y === 7.5, 'divide by negative');
	assert(v.dot(new Vector(10, 10)) === 45 + 75, 'dot product');
	let d = v.direction();
	assert(v.normalize().mag() === 1, 'nomalization');
	assert(d === v.direction(), 'direction doesn\'t change after normalization');
}

test();
