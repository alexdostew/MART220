function setup()
{
    createCanvas(600,600);
}

function draw()
{
    background(50,0,0);
    noStroke();
    fill(200,50,0);
    rect(0,0,600,10);
    rect(0,0,10,600);
    rect(0,590,600,10);
    rect(590,0,10,600);

    fill(255);
    triangle(10,10,590,300,300,590);

    fill(255);
    textSize(12);
    text('Alexander Stewart', 450,560);
    textSize(18);
    text('Shapes', 150,60);

    fill(150,200,240);
    circle(300,300,300);

    fill(150,200,240);
    square(100,100,50);

    fill(120,160,250);
    square(450,100,70);

    fill(90,140,255);
    square(450,450,90);

    fill(120,100,255);
    square(100,450,110);
    ellipse(300,200,200,20);
    ellipse(300,400,200,20);

    fill(230,210,150);
    ellipse(300,300,300,60);

    fill(0);
    circle(300,300,60);
    circle(300,200,20);
    circle(300,400,20);
}
