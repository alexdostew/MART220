var playing;
var button;
var myVideos = [];
var firepitStrings = [];
var ruby1Strings = [];
var ruby2Strings = [];

function preload() {
  // get video information from text files
  firepitStrings = loadStrings('assets/firepit.txt');
  ruby1Strings = loadStrings('assets/ruby1.txt');
  ruby2Strings = loadStrings('assets/ruby2.txt');
}

function setup() {
  //create video objects using information from text files
  myVideos.push(new myVideo(firepitStrings[0], firepitStrings[1], firepitStrings[2], firepitStrings[3], firepitStrings[4]));
  myVideos.push(new myVideo(ruby1Strings[0], ruby1Strings[1], ruby1Strings[2], ruby1Strings[3], ruby1Strings[4]));
  myVideos.push(new myVideo(ruby2Strings[0], ruby2Strings[1], ruby2Strings[2], ruby2Strings[3], ruby2Strings[4]));

  createCanvas(screen.width, screen.height);
  background(10,10,20);
  fill(255);
  textSize(42);
  text("The Backyard", 560, 50);

  // create button to play/pause videos
  button = createButton('Play videos');
  button.position(90, 790);
  button.mousePressed(playVideo);

  for (var i = 0; i < myVideos.length; i++) {
    // create the video
    var tempVideo = createVideo([myVideos[i].path]);
    tempVideo.size(myVideos[i].w, myVideos[i].h);
    tempVideo.position(myVideos[i].x, myVideos[i].y);
    // add video to object
    myVideos[i].setVideoObject(tempVideo);
  }
}

function playVideo() {
  // check if video is already playing or paused
  if (playing) {
    for (var i = 0; i < myVideos.length; i++) {
      var temp = myVideos[i].VideoObject;
      temp.pause();
    }
    // switch button text
    button.html('Play videos');
    playing = false;
  } else {
    for (var i = 0; i < myVideos.length; i++) {
      var temp = myVideos[i].VideoObject;
      temp.loop();
    }
    button.html('Pause videos');
    playing = true;
  }
}
