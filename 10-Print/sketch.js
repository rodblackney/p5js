
let x = 0;
let y = 0;
let spacing = 50;

function setup() {
	createCanvas(400,400);
	background(0);
}

function draw() {
	strokeWeight(1);
	if (random(1) < 0.6) {
		rect(x,y,spacing,spacing);
		stroke('rgba(0,255,0,2)');
		line(x, y, x+spacing, y+spacing);
	} else {
		stroke('rgba(0,255,0,2)');
		strokeWeight(1);
		line(x, y+spacing, x+spacing, y);
		// rect(x,y,spacing,spacing);		
		ellipse(x, y, spacing, spacing);
	}	

	x = x +spacing;
	if (x > width) {
		x = 0;
		y = y + spacing;
	}
}