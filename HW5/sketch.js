var idleObjects = [];
var runRightObjects = [];
var runLeftObjects = [];
var attackObjects = [];
var currentObjects = [];

var obsObjects = [];

var idleAnim = [];
var runRightAnim = [];
var runLeftAnim = [];
var attackAnim = [];
var currentAnim;

var obsImages = [];

var idleResult;
var runRightResult;
var runLeftResult;
var attackResult;

var obsResults = [];

var counter = 0;

var moveSpeed = 5;

var myInterval;

var index = 0;

//load image paths from files
function preload() {
  idleResult = loadStrings('assets/knightIdle.txt');
  runRightResult = loadStrings('assets/knightRunRight.txt');
  runLeftResult = loadStrings('assets/knightRunLeft.txt');
  attackResult = loadStrings('assets/knightAttack.txt');
  obsResults = loadStrings('assets/obstacles.txt');
}


function setup() {
  createCanvas(800, 600);
  console.log(obsResults);
  //create animation arrays
  for(var i = 0; i < idleResult.length; i++) {
    idleObjects.push(new imageClass(idleResult[i],0,0));
    idleAnim[i] = idleObjects[i].getImage();

    runRightObjects.push(new imageClass(runRightResult[i],0,0));
    runRightAnim[i] = runRightObjects[i].getImage();

    runLeftObjects.push(new imageClass(runLeftResult[i],0,0));
    runLeftAnim[i] = runLeftObjects[i].getImage();

    attackObjects.push(new imageClass(attackResult[i],0,0));
    attackAnim[i] = attackObjects[i].getImage();
  }

  //create obstacles
  for (var i = 0; i < obsResults.length; i++) {
    obsObjects.push(new imageClass(obsResults[i],Math.floor(Math.random() * 600),Math.floor(Math.random() * 400)))
    obsImages[i] = obsObjects[i].getImage();
  }
  console.log(obsObjects);

  currentObjects = idleObjects

  myInterval = setInterval(incrementIndex, 50);
}

function draw() {
  background(120);

  if(keyIsPressed) {
    clearInterval(myInterval);
    myInterval = null;
    index++;
    if (index > 3) {
      incrementIndex();
      index = 0;
    }

    if (key == "d") {
      //set animation
      currentAnim = runRightAnim;
      currentObjects = runRightObjects;

      checkCounter();

      movePos(moveSpeed);

      runRightObjects = currentObjects;
    } else if (key == "a") {
      //set animation
      currentAnim = runLeftAnim;
      currentObjects = runLeftObjects;

      checkCounter();

      movePos(moveSpeed * -1);

      runLeftObjects = currentObjects;
    } else if (key == "x" || keyCode == "32") {
      currentAnim = attackAnim;
      currentObjects = attackObjects;

      checkCounter();
    }

    for(var i = 0; i < idleObjects.length; i++) {
      idleObjects[i].setX(currentObjects[0].getX());
    }
  } else {
    if (myInterval == null) {
      myInterval = setInterval(incrementIndex, 50);
    }
    currentObjects = idleObjects;
    currentAnim = idleAnim;
  }
  image(currentAnim[counter], currentObjects[counter].getX(), currentObjects[counter].getY(), 145, 175);

  //draw obstacles
  for (var i = 0; i < obsObjects.length; i++) {
    image(obsImages[i],obsObjects[i].getX(),obsObjects[i].getY());
  }

}

function incrementIndex() {
  counter += 1;

  if (counter >= currentObjects.length) {
    counter = 0;
  }
}

function checkCounter() {
  if (counter >= currentAnim.length) {
    counter = 0;
  }
}

//update all object positions
function movePos(speed) {
  for (var i = 0; i < currentObjects.length; i++) {
    currentObjects[i].setX(currentObjects[i].getX() + speed);
    runLeftObjects[i].setX(currentObjects[i].getX() + speed);
    runRightObjects[i].setX(currentObjects[i].getX() + speed);
    idleObjects[i].setX(currentObjects[i].getX() + speed);
    attackObjects[i].setX(currentObjects[i].getX() + speed);
  }
}
