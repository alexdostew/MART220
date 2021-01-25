var counter = 0;
var rc = [];
var gc = [];
var bc = [];
var shapeX = [];
var shapeY = [];
var shapeSize1 = 50;
var shapeSize2 = 90;
var shapeSize3W = 20;
var shapeSize3H = 70;
var shapeSize4W = 120;
var shapeSize4H = 70;
var shapeSize5W = 190;
var shapeSize5H = 70;
var shapeSize6 = 90;
var shapeSize9W = 50;
var shapeSize9H = 190;

// function to set shape/color values
function createNewShapes() {
  // random colors
  for (var i = 0; i < 10; i++) {
    rc[i] = random(255);
    gc[i] = random(255);
    bc[i] = random(255);

  // random x and y values
    shapeX[i] = random(100,700);
    shapeY[i] = random(100,500);
  }

  shapeSize1 = random(100);
  shapeSize2 = random(100);
  shapeSize3W = random(50);
  shapeSize3H = random(100);
  shapeSize4W = random(100);
  shapeSize4H = random(100);
  shapeSize5W = random(200);
  shapeSize5H = random(100);
  shapeSize6 = random(135);
  shape6r = random(90,360);
  shapeSize9W = random(100);
  shapeSize9H = random(200);
  shapeSW10 = random(1,30)
}

function setup()
{
    createCanvas(800,600);
    createNewShapes();
}

function draw()
{
    background(50,0,0);
    // create borders
    noStroke();
    fill(200,50,0);
    rect(0,0,800,10);
    rect(0,0,10,600);
    rect(0,590,800,10);
    rect(790,0,10,600);

    // Text
    fill(255);
    textSize(12);
    text('Alexander Stewart', 450,560);
    textSize(18);
    text('Shapes', 150,60);

    if (counter > 100) {
      createNewShapes();
      counter = 0;
    }

    counter++;

    // shape 1
    fill(rc[0],gc[0],bc[0]);
    square(shapeX[0],shapeY[0],shapeSize1);

    // shape 2
    fill(rc[1],gc[1],bc[1]);
    circle(shapeX[1],shapeY[1],shapeSize2);

    // shape 3
    fill(rc[2],gc[2],bc[2]);
    rect(shapeX[2],shapeY[2],shapeSize3W,shapeSize3H);

    // shape 4
    fill(rc[3],gc[3],bc[3]);
    rect(shapeX[3],shapeY[3],shapeSize4W,shapeSize4H);

    // shape 5
    fill(rc[4],gc[4],bc[4]);
    ellipse(shapeX[4],shapeY[4],shapeSize5W,shapeSize5H);

    // shape 6
    fill(rc[5],gc[5],bc[5]);
    arc(shapeX[5], shapeY[5], shapeSize6, shapeSize6, shape6r, PI + QUARTER_PI);

    // shape 7 help
    fill(rc[6],gc[6],bc[6]);
    quad(shapeX[6], shapeY[6], 200, 400, 600, 100, 200, 300);

    // shape 8 help
    fill(rc[7],gc[7],bc[7]);
    triangle(shapeX[7], shapeY[7], 100, 300, 150, 230);

    // shape 9
    fill(rc[8],gc[8],bc[8]);
    ellipse(shapeX[8],shapeY[8],shapeSize9W,shapeSize9H);

    // shape 10
    stroke(rc[9],gc[9],bc[9]);
    strokeWeight(shapeSW10);
    line(shapeX[9], shapeY[9], 90, 100);

}
