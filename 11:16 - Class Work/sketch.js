//ARRAYS

/*let x1 = 200;
let x2 = 300;
let x3 = 400;

let xPositions = [200, 300, 400, 500, 600, 700, 150];
let yPositions = [700, 250, 350, 760, 150, 420, 500];
let colors = ["blue", "orange", "red", "green", "yellow", "pink", "black"];

function setup() {
  createCanvas(800, 800);
}


function draw() {
  background(220);
  fill ("white");

  for (let i = 0; i < xPositions.length; i++){
    fill (colors [i]);
    circle (xPositions [i], yPositions [i], 50);
    //yPositions [i] +=2; //moves the circles vertically
    //xPositions [i] +=2; //moves the circles horizontally
  }
}
 /* circle (xPositions [0], 200, 50);
  circle (xPositions [1], 200, 50);
  circle (xPositions [2], 200, 50); */

//.push function

let xPos = [];
let yPos = [];
let colors = [];

function setup(){
  createCanvas (400,400);
}

function draw(){
  background (220);
  for (let i = 0; i < xPos.length; i++){
    //fill ("blue");
    fill (colors[i]);
    circle (xPos [i], yPos [i], 50);
  }
}

function mousePressed() {
  xPos.push(mouseX);
  yPos.push(mouseY);
  colors.push(color(random (255), random (255), random(225)));
}