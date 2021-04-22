function setup() {
  createCanvas(400, 400);
  background(220, 200, 0);
    push();
  fill(220, 150, 0);
  ellipse(200, 200, 300, 300);
  pop();
  X = 240;
}

function draw() {
  loop();
  push();
  //moving ellipse pepperoni
  push();
  fill(0, 100, 0);
  ellipse(X, 130, 20, 20);
  X = X + 1;
  if(X > 300){X = 240;}
  pop();
  //pizza sauce
  push();
  fill(240, 0, 0);
  noStroke();
  if(mouseIsPressed){ellipse(mouseX, mouseY, 50, 50);}
  pop();
  //adds peppers
  push();
  fill(0, 140, 0);
  if(keyIsPressed){triangle(mouseX, mouseY + 20, mouseX + 20, mouseY, mouseX - 20, mouseY);}
  pop();
  push();
  fill(200, 0, 0);
   //While (mouseIsPressed){ellipse(350, 350, 20, 20);}
  pop();
  //couldn't get while loops to work or for loops as any time I tried them they crashed the web browser
}