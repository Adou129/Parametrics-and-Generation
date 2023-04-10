function setup(){
    createCanvas(1000,1000)
    background(235, 145, 15);
}


function draw(){
    noStroke();
    fill(40, 100, 230);
    rect(200, 300, 30, 200);
    circle(215,250,50);
    circle(415,440,40);
    erase();
    ellipse(320, 330, 200);
    noErase();
    rect(400, 200, 30, 200);
}
