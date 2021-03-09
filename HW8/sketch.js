var posX = 0;
var posY = 0;
var speed = 5;
var size = 50;

function setup() {
  createCanvas(800,600,WEBGL);
}

function draw() {
  background(50,0,30);
  // set lights
  ambientLight(45,0,0);
  pointLight(0,0,150, 0,-50,20);
  pointLight(255,0,50, posX,posY,50);

  // create player
  push();
  translate(posX, posY, 50);
  box(size);
  pop();

  // box
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  translate(100,100,0);
  box();
  pop();

  //ellipse
  push();
  translate(-100, -100, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  ellipsoid(30, 40, 40);
  pop();

  //cylinder
  push();
  translate(200,100,0);
  rotateX(frameCount * 0.01);
  cylinder(120, 120);
  pop();

  if(keyIsPressed) {
    if (key == "w") {
      posY-= speed;
    } else if (key == "d") {
      posX+= speed;
    } else if (key == "s") {
      posY+= speed;
    } else if (key == "a") {
      posX-= speed;
    } else if (keyCode == RIGHT_ARROW) {
      size++;
    } else if (keyCode == LEFT_ARROW) {
      size--;
    }
  }
}
