var img;

function preload() {
  img = loadImage("landscape.jpg");
}


function setup() {
  createCanvas(600,400);
}

function draw() {
  background(255);
  var aspect = img.height / img.width;

  var imageWidth = mouseX;
  var imageHeight = imageWidth * aspect;

  image(img,0,0,imageWidth,imageHeight)
}