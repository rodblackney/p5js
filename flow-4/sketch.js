
var bgcolor = 0;

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(bgcolor);
  fill(255);
//  noStroke();
  ellipse(width/2,height/2,100,100)

  var d = dist(width/2,height/2, mouseX, mouseY);
  
  if (d < 50 && mouseIsPressed) {
    bgcolor = 255;
      } else {
    bgcolor = 0;
      }
}