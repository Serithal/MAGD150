var cx, cy;
var rx = 350;
var ry = 350;
var rw = 40;
var rh = 40;
var cx = 60;
var cy = 310;
var cwspeed = 2;
var chspeed = 1;
var EFILLG = 50;
var EFILLR = 50;
var EFILLB = 50;
var TFILLR = 100;
var TFILLG = 100;
var TFILLB = 100;
// everytime I tried to program a circular button the entire program failed so I will have to skip that unfortunately
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 50, 10);
  //for rectangle button
  push();
  rect(rx, ry, rw, rh);
  fill(200, 30, 30);
       push();
textSize(10);
  fill(0, 0, 100);
      text('Push me', 350, 345);
      pop();
  if(mouseX>rx && mouseX<rx+rw && mouseY>ry && mouseY<ry+rh){fill(90,100,30);} //sqaure highlight
  if(mouseIsPressed){
    if(mouseX>rx && mouseX<rx+rw && mouseY>ry && mouseY<ry+rh){
      fill(30, 200, 30);
      push();
      fill(TFILLR,TFILLG, TFILLB);
      rect(30, 30, 340, 300);
      pop();
      push();
      fill(EFILLR, EFILLG, EFILLB);
      ellipse(cx, cy, 30, 30);
      cx+= cwspeed;
      cy-= chspeed;
      
      if(cy<=45){chspeed = -1; EFILLG = 250; EFILLB = 200;}
      if(cy>=315){chspeed= 1; EFILLR = 230; EFILLB = 30;}
      if(cx>=355){cwspeed = -2; EFILLB = 200; EFILLR = 30;}
      if(cx<=45){cwspeed = 2; EFILLG = 50; EFILLR = 230;}
      pop();
      // for bouncing circle 
 
      
    }
  }

}
 