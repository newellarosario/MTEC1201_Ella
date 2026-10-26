
//game stages
let state;

//game character
let turtle;

//trash images
let poop;
let bottle;
let apple;

//image preload
function preload() {
  turtle = loadImage("sea_turtle.png");
  poop = loadImage("poop.png")
  bottle = loadImage("bottle.png")
  apple = loadImage("apple.png")
}

//state starts with pregame and beach background
function setup() {
  createCanvas(1000, 1000);
   background(150,230,240);
   state = "preGame"
}

//draw based on the state
function draw() {
  if (state === "preGame") {
    preGame();
  }
  else if (state === "game")
    game();
  else if (state ==="gameOver")
    gameOver();
}


function preGame() {
    sand(0,750, 1000, 1000);
    sandCastle(750, 700, 50, 50);
    sandCastle(800, 650, 50, 100);
    sandCastle(100, 675, 50, 75);
    sandCastle(150, 700, 50, 50);
    openingTitle();
    instructions();
    image(turtle, 350, 300, 300, 300)
}

function sand(SandX, SandY, sandX, sandY) {
  fill(240, 200, 100);
  noStroke();
  rect(SandX,SandY, sandX, sandY);
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
  text("Use your mouse to drag the turtle around various trash on the beach! Click the turtle to start!", 500, 150);
}

//click on turtle, starts game if we are in preGame state
function mousePressed() {
  if (state === "preGame" && mouseX >= 350 && mouseX <= 650 && mouseY >= 300 && mouseY <= 600) {
    state = "game";
  }
}

function ocean(OceanX, OceanY, oceanX, oceanY){
  //add images of ocean things, maybe a star fish? 
  noStroke();
  fill(30,80,200)
  rect(OceanX,OceanY, oceanX, oceanY);
}

function game() {
  oceanInstructions();
  background (150,230,240);
  sand(0,750,750,750)
  ocean(750,750,1000,1000); 
//figure out a way to rotate the turtle
  image(turtle, mouseX, 700, 100, 100);
  
}

function oceanInstructions(){
  fill(0);
  noStroke();
  textSize(10);
  textAlign(CENTER);
  textFont("Comic Sans MS");
  text("Move your mouse to help the turtle avoid the trash on the beach. If you touch the trash, GAME OVER!")
}

function randomTrash(){
  random(0,1,2)
}