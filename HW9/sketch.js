var tick;
var shapeArray = [];
var shapePos = [];
var boxTranslationX = -400;
var boxTranslationY = -400;

function preload() {
  tick = loadModel('assets/tick.obj', true);
  springs = loadImage('assets/001.jpg');
  cab = loadImage('assets/cab.jpg');
  pancakes = loadImage('assets/protein-pancakes.jpg');
  polygon = loadImage('assets/polygon-card.jpg');
  square = loadImage('assets/square-card.jpg');
}

function setup() {
  createCanvas(800,600,WEBGL);

  // shapes that will change with mouse press
  shapeArray.push(new shapeclass("box", 150, 150, 150, boxTranslationX, boxTranslationY, 0.02, 0.03, 0, springs));
  shapeArray.push(new shapeclass("cylinder", 80, 90, 0, boxTranslationX + 200, boxTranslationY - 200, 0.01, 0.01, 0, pancakes));

  // add random positions
  for (var i = 0; i < shapeArray.length; i++) {
    shapePos.push(floor(random(300)));
  }
}

function draw() {
  background(20,50,70);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  model(tick);

  // draw shapes that can be moved
  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].setTranslateX(shapePos[i]);
    shapeArray[i].setTranslateY(shapePos[i]);
    shapeArray[i].draw(frameCount);
  }

  ambientLight(45,0,200);
  pointLight(0,0,150, 0,-50,20);
  pointLight(255,0,50, 0,0,50);

  push();
  translate(200, 100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(cab);
  cone(50, 50);
  pop();

  push();
  translate(200, 100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(cab);
  cone(50, 50);
  pop();

  push();
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.01);
  translate(-250, -250);
  texture(polygon);
  beginShape();
  vertex(300, 0, 100, 0, 0);
  vertex(-200, 0, 50, 1, 0);
  vertex(10, 10, 100, 1, 1);
  vertex(0, 200, 50, 0, 1);
  vertex(400, 200, 150, 0, 1);
  endShape(CLOSE);
  pop();

  push();
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.01);
  translate(0, 100);
  texture(square);
  sphere(40, 3, 16);
  pop();

  // change positions when mouse is pressed
  if (mouseIsPressed) {
    for (var i = 0; i < shapeArray.length; i++) {
      shapePos[i] = floor(random(600));
    }
  }

}
