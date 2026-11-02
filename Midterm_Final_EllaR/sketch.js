/*November 1, 2026 - Midterm Final Project MTEC1201, Ella Rosario
In this game, the player is in control of a turtle that needs to navigate through a beach while avoiding trash obstacles.
The goal of this game is to help the turtle reach the ocean safely. The game starts when you click the image of the turtle
in the opening screen. Once the game starts, the player uses their mouse up and down to control the turtle. The trash on the 
beach is randomly dispersed and the player must avoid them to reach the ocean. If they collide with a piece of trash, the 
game ends. If they reach the ocean, they win the game. Once the game ends, they can click the turtle again to restart the code. 
*/


// game stages

let state = "preGame";

// game character

let turtle;
let turtleX = 0;
let turtleY = 400;
let turtleSize = 100;
let turtleSpeed = 5;

// trash images

let poop;
let bottle;
let apple;
let trashImages = [];
let trash = [];

// game settings
let oceanX = 800;
let beachTop = 200;
let beachBottom = 1000;

//moving cloud variable
let cloudX = 100;
let CloudX = 750;


// preload images
function preload() {
  turtle = loadImage("sea_turtle.png");
  poop = loadImage("poop.png");
  bottle = loadImage("bottle.png");
  apple = loadImage("Apple.png");
}

// setup
function setup() {
  createCanvas(1000, 1000);
  imageMode(CORNER);
  trashImages = [poop, bottle, apple];
  state = "preGame";
}

// draw based on game state
function draw() {

  if (state === "preGame") {
    preGame();
  }
  else if (state === "game") {
    game();
  }
  else if (state === "gameOver") {
    gameOver();
  }
  else if (state === "gameWin") {
    gameWin();
  }
}

// opening screen

function preGame() {
  background(150, 230, 240);
  sand(0, 750, 1000, 250);
  sandCastle(750, 700, 50, 50);
  sandCastle(800, 650, 50, 100);
  sandCastle(100, 675, 50, 75);
  sandCastle(150, 700, 50, 50);
  clouds(cloudX,200,100,50); //bottom cloud
  clouds(CloudX,75,150,50); //top cloud
    //clouds move horizontally on the screen
    cloudX = cloudX + 2
    CloudX = CloudX + 1
    //when they leave the screen, it restarts to the beginning
    if (cloudX >= 1100){ //canvas length + length of cloud
      cloudX = -150 //length + width of cloud negated
    }
    if (CloudX>= 1150){
      CloudX = -200
    }
  openingTitle();
  instructions();
  oceanInstructions();
  image(turtle, 350, 300, 300, 300);
  
}

// sand is drawn as a rectangle with a sandy color
function sand(SandX, SandY, sandWidth, sandHeight) {
  fill(240, 200, 100);
  noStroke();
  rect(SandX, SandY, sandWidth, sandHeight);
}

// sandcastle is drawn
function sandCastle(sandCastleX, sandCastleY, length, width) {
  fill(240, 200, 100);
  stroke(220, 175, 55);
  strokeWeight(5);
  rect(sandCastleX, sandCastleY, length, width);
  rect(sandCastleX + 23, sandCastleY - 10, length / 10, width / 10);
  rect(sandCastleX + 45, sandCastleY - 10, length / 10, width / 10);
  rect(sandCastleX, sandCastleY - 10, length / 10, width / 10);
}

//clouds are drawn
function clouds(cloudX, cloudY, cloudLength, cloudWidth) {
  fill(225, 230 ,230);
  noStroke();
  rect(cloudX, cloudY, cloudLength, cloudWidth);
  circle(cloudX , cloudY + cloudWidth/2, cloudWidth); //left most circle
  circle(cloudX + cloudLength, cloudY + cloudWidth/2, cloudWidth); // right most circle
  circle(cloudX + cloudLength/2, cloudY - cloudWidth/4, cloudLength/2); //middle circle
  circle(cloudX + cloudLength/4, cloudY, cloudLength/2); //2nd left circle
  circle(cloudX + cloudLength*.75, cloudY, cloudLength/2); //2nd right circle
}
  
// opening title
function openingTitle() {
  fill(230,150,100);
  strokeWeight(15);
  stroke(200,230,180);
  textSize(75);
  textAlign(CENTER);
  textFont("Copperplate");
  text("A Sea Turtle's Way Home", 500, 100);
}

// instructions
function instructions() {
  fill(230,150,100);
  strokeWeight(10);
  stroke(200,230,180);
  textSize(30);
  textAlign(CENTER);
  textFont("Comic Sans MS");
  text("Click on the turtle to start!",500,675);
}

// gameplay instructions
function oceanInstructions() {
  fill(30, 80, 200);
  strokeWeight(10);
  stroke(180,225, 230);
  textSize(20);
  textAlign(CENTER);
  textFont("Comic Sans MS");
  text("Move your mouse up and down to avoid the trash!", 500,150);
  text("Reach the ocean and bring the turtle home...",500,180);
}
  // click turtle to start game
function mousePressed() {
  if (state === "preGame" && mouseX >= 350 && mouseX <= 650 && mouseY >= 300 && mouseY <= 600) {
    startGame();
    
  }
  // click turtle on win screen to restart
  else if (state === "gameWin" && mouseX >= 400 && mouseX <= 600 && mouseY >= 550 && mouseY <= 750
  ) {
    state = "preGame";
  }
  // click turtle on lose screen to restart
  else if (state === "gameOver" && mouseX >= 400 && mouseX <= 600 && mouseY >= 600 && mouseY <= 800
  ) {
    state = "preGame";
  }

}

// start game

function startGame() {
  state = "game";
  turtleX = 0;
  turtleY = 400;
  
  // create new trash obstacles
  // reference website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  trash = [];

  // generate randomly positioned obstacles
  for (let i = 0; i < 15; i++) {
    let trashObject = {
      x: random(250, 730),
      y: random(beachTop + 50, beachBottom - 50),
      size: 45,

      // randomly select one of the three trash images
      img: random(trashImages)
    };
    trash.push(trashObject);
    // reference website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push 
  }
}

// draw the ocean
function ocean(OceanX, OceanY, oceanWidth, oceanHeight) {
  noStroke();
  fill(30, 80, 200);
  rect(OceanX, OceanY, oceanWidth, oceanHeight);
}

// draw the gameplay scene
function game() {
  background(150, 230, 240);
  sand(0, 200, oceanX, 800);

     // clouds are moving
     
    clouds(cloudX,100,200,50);
   
    //clouds move horizontally on the screen
    cloudX = cloudX + 1.5
   
    //when they leave the screen, it restarts to the beginning
    if (cloudX >= 1100){
      cloudX = 0
    }
    
ocean(oceanX, 200, 200, 1000);
  // TURTLE MOVEMENT
  // turtle moves horizontally across the beach
  turtleX += turtleSpeed;
  // mouse controls the turtle's vertical position
  // keep the turtle inside the beach area
  turtleY = constrain(mouseY - turtleSize / 2,beachTop,beachBottom - turtleSize);
  // constrain function from: https://p5js.org/reference/p5/constrain/
  // turtle is drawn
  image(turtle,turtleX,turtleY,turtleSize,turtleSize);

  // trash appears randomly on the beach
  for (let i = 0; i < trash.length; i++) {
//index function from: https://p5js.org/reference/p5/for/ 
    image(trash[i].img,trash[i].x,trash[i].y,trash[i].size,trash[i].size);

  // check whether turtle touches trash
    if (checkCollision(trash[i])) {
      state = "gameOver";
      return;
    }
  }
  // check if turtle reaches ocean
  if (turtleX + turtleSize >= oceanX) {
    state = "gameWin";
    return;
  }

}

// check for collision between the turtle and a trash object
function checkCollision(trashObject) {

  // turtle collision boundaries
  let turtleLeft = turtleX + 20;
  let turtleRight = turtleX + turtleSize - 20;

  let turtleTop = turtleY + 20;
  let turtleBottom = turtleY + turtleSize - 20;

  // trash collision boundaries
  let trashLeft = trashObject.x;
  let trashRight = trashObject.x + trashObject.size;

  let trashTop = trashObject.y;
  let trashBottom = trashObject.y + trashObject.size;

  // check if the two rectangles overlap
  return (turtleRight > trashLeft && turtleLeft < trashRight &&turtleBottom > trashTop &&turtleTop < trashBottom);

}



// win screen

function gameWin() {
  background(150, 230, 240);
  ocean(0,750,1000,250)
   //cloud moving 
  clouds(cloudX,300,200,100);
  clouds(CloudX,75,200,100);
    //clouds move horizontally on the screen
    cloudX = cloudX + 2
    CloudX = CloudX + 1
    //when they leave the screen, it restarts to the beginning
    if (cloudX >= 1200){
      cloudX = -300
    }
    if (CloudX>= 1200){
      CloudX = -300
    }
  
  textAlign(CENTER);
  winnningMessage();
  winningInstructions();

  image(turtle, 400, 550, 200, 200);

}

//winning message + instructions

function winnningMessage(){
  fill(230,150,100);
  strokeWeight(10);
  stroke(200,230,180);
  textSize(75);
  textFont("Copperplate");
  text("You Win!", 500, 350);
}

function winningInstructions(){
  fill(30, 80, 200);
  strokeWeight(10);
  stroke(180,225, 230);
  textFont("Comic Sans MS")
  textSize(30);
  text("You saved the sea turtle!",500,420);
  text("Click the turtle to play again!",500,460);
}



// lose screen

function gameOver() {
  background(150, 230, 240);
  sand(0, 750, 1000, 250);
  //cloud moving 
  clouds(cloudX,300,200,100);
  clouds(CloudX,75,200,100);
    //clouds move horizontally on the screen
    cloudX = cloudX + 2
    CloudX = CloudX + 1
    //when they leave the screen, it restarts to the beginning
    if (cloudX >= 1200){
      cloudX = -300
    }
    if (CloudX>= 1200){
      CloudX = -300
    }
  textAlign(CENTER);
  losingMessage();
  losingInstructions();
  
  //beach littered in trash + sandcastles
  image(turtle, 400, 600, 200, 200);
  image(poop, 250,750,50,50);
  image(apple, 500, 800, 50, 50);
  image(bottle, 800,770, 50,50);
  image(bottle, 100,900,50,50);
  image(poop, 750,850,50,50);

  sandCastle(750, 700, 50, 50);
  sandCastle(800, 650, 50, 100);
  sandCastle(100, 675, 50, 75);
  sandCastle(150, 700, 50, 50);
  
}

//losing message + instructions

function losingMessage(){
  fill(230,150,100);
  strokeWeight(10);
  stroke(200,230,180);
  textSize(75);
  textFont("Copperplate");
  text("Game Over!", 500, 350);
}

function losingInstructions(){
  fill(30, 80, 200);
  strokeWeight(10);
  stroke(180,225, 230);
  textFont("Comic Sans MS")
  textSize(30);
  text("The turtle touched the trash!",500,420);
  text("Click the turtle to try again!",500,460);
}
