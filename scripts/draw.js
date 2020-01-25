/* Methods for drawing basic shapes to the canvas. */


function createCanvas(width, height) {
	let c = document.createElement('canvas');
	c.width = width; c.height = height;
	document.getElementsByTagName('body')[0].appendChild(c);
	window.cnv = c;
	window.ctx = window.cnv.getContext('2d');
}


function fillBackground(color) {
	color = color || '#ffffff';
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, cnv.width, cnv.height);
}


function line(x0, y0, x1, y1) {
	ctx.beginPath();
	ctx.moveTo(x0, y0);
	ctx.lineTo(x1, y1);
	ctx.stroke();
}


function rect(x, y, w, h) {
	if (h === undefined) h = w; // if only width then square
	ctx.beginPath();
	ctx.rect(x, y, w, h);
	ctx.stroke();

}


function tri(x0, y0, x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x0, y0);
	ctx.lineTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineTo(x0, y0);
	ctx.stroke();
}


function ellipse(x, y, w, h, theta) {
	ctx.beginPath();
	if (h === undefined) {
		ctx.arc(x, y, w, 0, 2*Math.PI);
	} else {
		if (theta === undefined) theta = 0;
		ctx.ellipse(x, y, w/2, h/2, theta, 0, 2*Math.PI);
	}
	ctx.stroke();

}
