var animation;
var idle = [];
var run = [];
var attack = [];
var idleObjects = [];
var runObjects = [];
var attackObjects = [];
var i = 0;
var j = 0;
var counter = 0;
var playerX = 0;
var playerY = 0;
var speed = 5;

function preload() {


  for (var i = 0; i < 9; i++) {
    //idle images
    animation = new player("assets/Idle ("+ (i + 1) +").png",0,0);
    idleObjects[i] = animation;
    //run images
    animation = new player("assets/Run ("+ (i + 1) +").png",0,0);
    runObjects[i] = animation;
    //attack images
    animation = new player("assets/Attack ("+ (i + 1) +").png",0,0);
    attackObjects[i] = animation;
  }

  for (var i = 0; i < 9; i++) {
      idle[i] = idleObjects[i].getImage();
      run[i] = runObjects[i].getImage();
      attack[i] = attackObjects[i].getImage();
  }
}

// create the canvas
function setup() {

    createCanvas(800, 600);
    setInterval(incrementIndex, 100);
}

function draw() {

    background(120);

    if(keyIsPressed)
    {
        if(key == "d")
        {
            image(run[j], playerX, playerY,294,354);
            // sets run speed
            counter++;
            playerX += speed;
            playerCheck();
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }
        } else if(key == "a") {
            image(run[j], playerX, playerY,294,354);
            // sets run speed
            playerX -= speed;
            counter++;
            playerCheck();
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }
        }
        // attack animation
        else if(key == "x" || keyCode == "32")
        {
            image(attack[j], playerX, playerY,294,354);
            counter++;
            if(counter > 5)
            {
                incrementRunIndex();
                counter = 0;
            }
        }
        else
        {
            image(idle[i], playerX, playerY,294,354);
        }
    }
    else
    {
        image(idle[i], playerX, playerY,294,354);
    }


}

function incrementIndex()
{
     // increment the index
     i += 1;

     // if we reach the end of the array, start over
     if (i >= idle.length) {
         i = 0;
     }
}

function incrementRunIndex()
{

     // increment the index
     j += 1;

     // if we reach the end of the array, start over
     if (j >= run.length) {
         j = 0;
     }
}

//keeps player within canvas
function playerCheck() {

  if (playerX > 530) {
    playerX = 530;
  }
  if (playerX < 0) {
    playerX = 0;
  }
}
