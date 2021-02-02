var defDoor;
var redDoor;
var blueDoor;
var myFont;
var ddx = 20;
var ddy = 20;
var ddSpeed = 3;
var ddDir = 1;

var rdx = 606;
var rdy = 20;
var rdSpeed = 3;
var rdDir = 1;

var bdx = 313;
var bdy = 263;
var bdSpeedX = 3;
var bdSpeedY = 3;
var bdDirX = 1;
var bdDirY = 1;

var timerText = 0;


function preload() {
  defDoor = loadImage('assets/door.png');
  redDoor = loadImage('assets/red-door.png');
  blueDoor = loadImage('assets/blue-door.png');
  myFont = loadFont('assets/PressStart2P-Regular.ttf');
}

function setup()
{
    createCanvas(800,600);
    setInterval(updateText, 1000);
    setInterval(changeSpeed, 5000);
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

    image(defDoor,ddx,ddy, 174,306);

    if (ddx > 800 - 184 || ddx < 10) {
      ddSpeed *= -1;
      ddDir *= -1;
    }

    image(redDoor,rdx,rdy,174,306);

    if (rdy > 600 - 316 || rdy < 10) {
      rdSpeed *= -1
      rdDir *= -1;
    }

    image(blueDoor,bdx,bdy,174,306);

    if (bdx > 800 - 184 || bdx < 10) {
      bdSpeedX *= -1;
      bdDirX *= -1;
    }

    if (bdy > 600 - 316 || bdy < 10) {
      bdSpeedY *= -1
      bdDirY *= -1;
    }

    ddx += ddSpeed;
    rdy += rdSpeed;
    bdx += bdSpeedX;
    bdy += bdSpeedY;

    fill(255);
    textSize(12);
    textFont(myFont);
    text('Alexander Stewart', 450,560);
    text('Time Passed: ' + timerText, 300, 200);
    textSize(18);
    text('Shapes', 150,60);
}

function changeSpeed() {

  ddSpeed = random(1,10) * ddDir;
  rdSpeed = random(1,10) * rdDir;
  bdSpeedX = random(1,10) * bdDirX;
  bdSpeedY = random(1,10) * bdDirY;
}

function updateText() {
    timerText++;
}
