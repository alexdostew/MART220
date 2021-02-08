class player{

    constructor(path)
    {
        this.path = path;
    }

    getImage()
    {
        var myImage = loadImage(this.path);
        return myImage;
    }
}
