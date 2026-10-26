let state;
let turtle;
let poop;
let bottle;
let apple;

function preload() {
  turtle = loadImage("sea_turtle.png");
  poop = loadImage("poop.png")
  bottle = loadImage("bottle.png")
  apple = loadImage("apple.png")
}

function setup() {
  createCanvas(1000, 1000);
   background(150,230,240);
   state = "preGame"
}

function draw() {
  if (state === "preGame") {
    preGame();
  }
  
  if (state === "game")
    game();
}


function preGame() {
    sand();
    sandCastle(750, 700, 50, 50);
    sandCastle(800, 650, 50, 100);
    sandCastle(100, 675, 50, 75);
    sandCastle(150, 700, 50, 50);
    openingTitle();
    instructions();
    image(turtle, 500, 700, 100, 100)
}

 
function sand() {
  fill(240, 200, 100);
  noStroke();
  rect(0,750, 1000, 1000);
}

function sandCastle(sandCastleX, sandCastleY, length, width) {
  fill(240, 200, 100);
  stroke(220,175,55);
  strokeWeight(5);
  rect(sandCastleX, sandCastleY, length, width);
  rect(sandCastleX + 23, sandCastleY-10, length/10, width/10);
  rect(sandCastleX + 45, sandCastleY-10, length/10, width/10);
  rect(sandCastleX, sandCastleY-10, length/10, width/10);
}

function openingTitle() {
  fill(0);
  noStroke();
  textSize(50);
  textAlign(CENTER);
  textFont("Comic Sans MS");
  text("Save the Turtle!", 500, 100);
}

function instructions() {
  fill(0);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  textFont("Comic Sans MS");
  text("Use your mouse to drag the turtle around various trash on the beack! Press 'g' to start!", 500, 150);
}

function keyPressed() {
  if (key === 'g') {
    state === "game"
  }


}

function ocean (){
  noStroke();
  fill(100,220,225)
  rect(0,0, 1000, 1000);
}

function game() {
  background (240, 200, 100);
  ocean(); 
  image(turtle, mouseX, mouseY, 100, 100);
  
}