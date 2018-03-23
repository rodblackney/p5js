
var isBlack = false;

function setup() {
  createCanvas(900,600);
}

function draw() {
  if (isBlack == true) {
     background(0);
  } else {
     background(255,0,0); 
  }
}

function mousePressed() {
    if (mouseIsPressed == true) {
    isBlack = !isBlack
  }
}