class imageClass{

    constructor(path, x, y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
    }

    getX() {
      return this.x;
    }

    setX(number) {
      this.x = number;
    }

    getY() {
      return this.y;
    }

    setY(number) {
      this.y = number;
    }

    getImage()
    {
        var myImage = loadImage(this.path);
        return myImage;
    }
}
