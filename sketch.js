var rectx = 0
var recty = 0
var recth = 20
var rectw = 20
var rpm = 0
var rpml = 0
cb = 0
cr = 0
cg = 0
function setup() {
  createCanvas(800, 800);
   randomizeNumbers();
}

function draw() {
  background(100, 100, 200);
  BigBox();
  checkMouse();
  randomColors();
}

function BigBox(){
  fill(20, 100, 100);
  rect(rectx, recty, rectw, recth);
}

function randomColors(){
  cb += 1.5
  cr += 1
  cg += 2
  if (cb >= 255){
    cb=1
  }
  if (cr >= 235){
    cr = 1
  }
  if (cg >= 215){
    cg = 1
  }
}

function randomizeNumbers(){
  rectx += random(1, 780);
  recty += random(1, 780);
  recth += random(1, 20);
  rectw += random(1, 20);
}

function checkMouse(){
  if(mouseX>rectx && mouseX<rectx+rectw && mouseY>recty && mouseY<recty+recth){
          fill(100, 200, 100);
      rect(rectx, recty, rectw, recth);
  }
  if(mouseIsPressed){
    if(mouseX>rectx && mouseX<rectx+rectw && mouseY>recty && mouseY<recty+recth){
      fill(20, 50, 50);
      rect(rectx, recty, rectw, recth);
      translate(400, 400);
      drawPakman();
      push();
      scale(2);
      drawPakmanColor();
      rpml += 0.01
      pop();
    }
  }
}

function drawPakman(){
  fill(120, 200, 20);
   rotate(PI - rpm);
  rpm += 0.1
arc(100, 100, 90, 90, 0, PI + QUARTER_PI, PIE);
 
}

function drawPakmanColor(){
  fill(cr, cg, cb);
   rotate(PI - rpml);
arc(100, 100, 90, 90, 0, PI + QUARTER_PI, PIE);
 
}