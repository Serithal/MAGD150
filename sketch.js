function setup() {
  createCanvas(400, 400);
   background(0, 80, 90);
   //prints a few mathmatical calculations only once since it is in the setup bracket so it is best to start the program count to one then stop it and then scroll to the beginning of the console
  push();
  print('--The difference between 15 and 3 is-- ' + 15/3 );
  print('--The solution to 8 multiplied by itself is--  ' + 8 * 8);
  pop();
}

function draw() {
  //ellipse that follows the cursor (blue)
  push();
  fill(0, 60, 140);
  ellipse(mouseX, mouseY, 100.25, 100.25);
  push();
  fill(0, 150, 180);
  ellipse(mouseX + 16, mouseY - 24, 30.5, 45.5);
  pop();
  pop();
  //prints the frame count multiplied by 2
  push();
  print('The current frame count multiplied by two is ' + frameCount * 2);
  pop();
  //prints the previous mouse X and Y locations
  push();
  print('The current Mouse X location is ' + pmouseX);
  print('The current Mouse Y location is ' + pmouseY);
  pop();
  //maps the current mouse Y position and displays an ellipse at the location only between Y value of 40 and 360
  push();
  let Min1 = min(40, 60);
  let Max1 = max(360, 320);
  let CY = constrain(mouseY, Min1 , Max1);
  let E1 = map(CY, 0, height, 0, 400, true);
  fill(255);
  ellipse(50, E1, 25, 45);
  pop();
 
}