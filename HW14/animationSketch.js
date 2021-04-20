var frame;
var animation = [];
var i = 0;

function preload() {
  for (var i = 0; i < 10; i++) {
    frame = loadImage('assets/myMovie' + i + '.png');
    animation.push(frame)
  }

}

function setup() {

    createCanvas(640, 480);
    setInterval(nextFrame, 100);
}

function draw() {
    background(120);
    image(animation[i], 0, 0);
}

function nextFrame() {
  i++;
  if (i >= animation.length) {
      i = 0;
  }
}
