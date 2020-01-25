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
