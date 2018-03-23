function setup() {
  createCanvas(600,900);
  strokeWeight(4);
}

function draw() {
  if (mouseX < 300) {
    stroke(255,0,0);    
  } else {
    stroke(0);
  }


  if (mouseIsPressed == true) {
      ellipse(mouseX,mouseY,30,30);    
    }
  }