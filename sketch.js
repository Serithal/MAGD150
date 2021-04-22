let snow1;
//The array holding the different text options
let array = ["Its Snowing", "So Cold", "Bring A Coat"];
var check = 0;
function setup() {
  createCanvas(400, 400);
  snow1 = new funny();
}
// All of the function calls bellow are telling the program to snow harder
function draw() {
  //noLoop();
  background(100);
   snow1.snowfall();
  snow1.drawsnow();
   snow1.snowfall();
  snow1.drawsnow();
   snow1.snowfall();
  snow1.drawsnow();
   snow1.snowfall();
  snow1.drawsnow();
   snow1.snowfall();
  snow1.drawsnow();
   snow1.snowfall();
  snow1.drawsnow();
    snow1.snowfall();
  snow1.drawsnow();
    snow1.snowfall();
  snow1.drawsnow();
    snow1.snowfall();
  snow1.drawsnow();
    snow1.snowfall();
  snow1.drawsnow();
    snow1.snowfall();
  snow1.drawsnow();
    snow1.snowfall();
  snow1.drawsnow();
      fill(255);
    textSize(40);
    text(array[check], 200, 350);

  
}
//When the mouse is pressed a different text will display
  function mousePressed(){
check = check + 1;
    if(check == 3){
      check =0;
    }
  }

//the snow class with all the variables necessary
class funny {
  
  Constructor(){
    var T, R, B, V, K;
    this.T = random(0, width);
    this.R = random(0, height);
    this.B = random(4, 10);
    this.V = random(4, 10);
    this.K = 1;
  }
  
  drawsnow(){
    fill(255);
    ellipse(this.T, this.R, this.B, this.V);
    
  }
  snowfall(){
    this.T = random(0, width);
    this.R = random (0, height);
    this.B = random(4, 10);
    this.V = random(4, 10);

    if(this.R > height){
      this.R = 1;
    }
  }
}