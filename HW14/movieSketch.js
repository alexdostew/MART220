var mainColor = 255;

function setup() {
    createCanvas(640, 480);
    background(0);
    frameRate(25);
    noStroke();
    rectMode(CENTER);
}
function draw() {
    fill(random(mainColor),random(mainColor),random(mainColor), random(100));

    var size = random(200);

    circle(random(width), random(height), size);

    fill(random(mainColor),random(mainColor),random(mainColor), random(100));

    size = random(200);

    rect(random(width), random(height), size);

    if (frameCount % 2 == 0) {
        mainColor = 255 - mainColor; // 255 0 255 0 255 0 ..
    }

    if (frameCount > 25) { // 1 second * 25 fps = 25
        noLoop();
    }
}
