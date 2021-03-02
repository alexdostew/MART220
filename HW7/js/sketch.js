var knightObjects;
var idleResult;
var runRResult;
var runLResult;
var zombie;
var grave;
var tree;
var exit;
var win = false;
var obstacles = [];
var health = [];
var particles = [];

function preload() {
  //get strings from text files
  idleResult = loadStrings('assets/knightIdle.txt');
  runRResult = loadStrings('assets/knightRunRight.txt');
  runLResult = loadStrings('assets/knightRunLeft.txt');
  attackResult = loadStrings('assets/knightAttack.txt');
  objects = loadStrings('assets/obstacles.txt');
}

function setup() {
  createCanvas(800,800);
  // create player object, add animations
  knightObjects = createSprite(400,400);
  knightObjects.addAnimation('idle', idleResult[0], idleResult[idleResult.length-1]);
  knightObjects.addAnimation('runRight', runRResult[0], runRResult[runRResult.length-1]);
  knightObjects.addAnimation('runLeft', runLResult[0], runLResult[runLResult.length-1]);
  knightObjects.addAnimation('attack', attackResult[0], attackResult[attackResult.length-1]);

  // add obstacles
  zombie = createSprite(Math.floor(100 + Math.random() * 600),Math.floor(100 + Math.random() * 600));
  zombie.addImage(loadImage('assets/zombie.png'));
  obstacles.push(zombie);

  grave = createSprite(Math.floor(100 + Math.random() * 600),Math.floor(100 + Math.random() * 600));
  grave.addImage(loadImage('assets/grave.png'));
  obstacles.push(grave);

  tree = createSprite(Math.floor(100 + Math.random() * 600),Math.floor(100 + Math.random() * 600));
  tree.addImage(loadImage('assets/tree.png'));
  obstacles.push(tree);

  //add health attribute to obstacles
  for (var i = 0; i < obstacles.length; i++) {
    health.push(100);
  }
}

function draw() {
  background(120);
  // check for keypress, move in direction
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
  } else if(keyDown('x')) {
    knightObjects.changeAnimation('attack');
    knightObjects.velocity.x = 0;
    knightObjects.velocity.y = 0;
    attackEnemy();
  } else {
    knightObjects.changeAnimation('idle');
    knightObjects.velocity.x = 0;
    knightObjects.velocity.y = 0;
  }

  drawSprites();

  // win text
  fill(255,255,255);
  textSize(32);
  if (win) {
    text('You Win!', 350,400);
  }

  console.log(health);

}

// check if player has collided with anything
function checkCollisions() {

  for (var i = 0; i < obstacles.length; i++) {
    if (knightObjects.collide(obstacles[i])) {
      knightObjects.changeAnimation('idle');
    }
  }
}

function attackEnemy() {
  // check distance from obstacles to attack
  for (var i = 0; i < obstacles.length; i++) {
    if(dist(knightObjects.position.x, knightObjects.position.y, obstacles[i].position.x, obstacles[i].position.y) < 250) {
      createParticles(obstacles[i].position.x, obstacles[i].position.y);
      health[i] -= 1;
      //destroy object if health is < 0
      if (health[i] <= 0) {
        obstacles[i].remove();
        obstacles[i] = null;
        obstacles.splice(i, 1);
        health.splice(i, 1);
      }
    }
  }

  if (obstacles.length <= 0) {
    win = true;
  }
}

function createParticles(x,y)
{
for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}
