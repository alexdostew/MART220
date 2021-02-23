var knightObjects;
var idleResult;
var runRResult;
var runLResult;
var zombie;
var grave;
var tree;
var exit;
var win = false;

function preload() {
  idleResult = loadStrings('assets/knightIdle.txt');
  runRResult = loadStrings('assets/knightRunRight.txt');
  runLResult = loadStrings('assets/knightRunLeft.txt');
  objects = loadStrings('assets/obstacles.txt');
}

function setup() {
  createCanvas(800,800);
  knightObjects = createSprite(400,400);
  knightObjects.addAnimation('idle', idleResult[0], idleResult[idleResult.length-1]);
  knightObjects.addAnimation('runRight', runRResult[0], runRResult[runRResult.length-1]);
  knightObjects.addAnimation('runLeft', runLResult[0], runLResult[runLResult.length-1]);

  zombie = createSprite(Math.floor(100 + Math.random() * 600),Math.floor(100 + Math.random() * 600));
  zombie.addImage(loadImage('assets/zombie.png'));

  grave = createSprite(Math.floor(100 + Math.random() * 600),Math.floor(100 + Math.random() * 600));
  grave.addImage(loadImage('assets/grave.png'));

  tree = createSprite(Math.floor(100 + Math.random() * 600),Math.floor(100 + Math.random() * 600));
  tree.addImage(loadImage('assets/tree.png'));

  exit = createSprite(400,785);
  exit.addImage(loadImage('assets/exit.png'));
}

function draw() {
  background(120);

  if (keyDown('d')) {
    knightObjects.changeAnimation('runRight');
    knightObjects.velocity.x += .5;
    checkCollisions();
  } else if (keyDown('a')) {
    knightObjects.changeAnimation('runLeft');
    knightObjects.velocity.x -= .5;
    checkCollisions();
  } else if(keyDown('w')) {
    knightObjects.velocity.y -= .5;
    knightObjects.changeAnimation('runRight');
    checkCollisions();
  } else if(keyDown('s')) {
    knightObjects.velocity.y += .5;
    knightObjects.changeAnimation('runRight');
    checkCollisions();
  } else {
    knightObjects.changeAnimation('idle');
    knightObjects.velocity.x = 0;
    knightObjects.velocity.y = 0;
  }
  drawSprites();

  fill(255,255,255);
  textSize(32);
  if (win) {
    text('You Win!', 350,400);
  }

}

function checkCollisions() {
  if (knightObjects.collide(grave) || knightObjects.collide(zombie) || knightObjects.collide(tree)) {
    knightObjects.changeAnimation('idle');
  }

  if (knightObjects.collide(exit)) {
    win = true;
  }
}
