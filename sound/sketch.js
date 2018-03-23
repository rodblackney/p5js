
var sound;

function preload() {
  sound = loadSound("assets/thingsilike.mp3");
}

function setup() {
  createCanvas(600,600);
  
  textFont("Source Code Pro");
  textSize(48);
  
  
  sound.setVolume(0.1);
  // enables sound to be looped
  // sound.loop();
}

function draw() {
  background(255);
  text("Click to play sound", mouseY,0,mouseX,200);
  
}
  
  function mousePressed() {
    sound.play();
}