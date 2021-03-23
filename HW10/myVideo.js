class myVideo {
  constructor(path, x, y, w, h) {
      this.path = path;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }

    setVideoObject(videoObject)
    {
        this.videoObject = videoObject;
    }

    get VideoObject()
    {
        return this.videoObject;
    }
  }
