
var sourceCodePro;

function preload() {
  sourceCodePro = loadFont("SourceCodePro-Regular.ttf");
}

function setup() {
  createCanvas(900,600);
  textFont(sourceCodePro);
  textSize(42);
}

function draw() {
  background(255);
  text("Hello World it is a great day outside", mouseX,mouseY,500,200);
}