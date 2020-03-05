function setup() {
  // put setup code here
  createCanvas(640, 480);
  background(0,0,0,0);
}

function draw() {
  // put drawing code here
  // coordinate = ellipse(x, y, xd, yd); browser window square, starts at upper left; x=horizontal, y=vertical
  //center of the canvas created will be 324, 240
  //start from the bottom, then fill, then noStroke
  noStroke();
  fill(255,187,179,80);
  ellipse(324,240,100,100);

//adding alphas, the number is the percentage
  noStroke();
  erase();
  //fill(255,255,187,30);
  ellipse(mouseX,mouseY,100,100);
}

function mousePressed(){
    background(151,232,213);
}
