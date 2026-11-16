/* Short Study #5 - Ella R.: "The Transition of Day and Night" 11/16/16
Hover over the circles to activate the sun and the moon. When the cursor is on the day side,
the sun will appear, and when the cursor is on the night side, the moon will appear.
*/

let mouseCheck;

let circleXPositions = [0, 125, 225, 350, 700, 575, 475];
let circleYPositions = [500, 350, 225, 100, 500, 350, 225];

//moving cloud variable
let cloudX = 100;
let CloudX = 0;

function setup() {
  createCanvas(700, 700);
}

function draw() {

  skyBackground(90, 115, 255, 0, 0, 350, 700);
  skyBackground(10, 10, 110, 350, 0, 350, 700);
  
    clouds(cloudX, 50, 150, 50);
      cloudX += 0.2;
    clouds(CloudX, 200, 150, 50);
      CloudX += 0.5;
      if (cloudX >= 800){
      cloudX = 0
     }

  //make the circles going throught the list of x and y positions
  for (let i = 0; i < circleXPositions.length; i++) {

    let x = circleXPositions[i];
    let y = circleYPositions[i];
   
   //fills the circles with the correct color based on the side of the screen and if the mouse is hovering
    let mouseCheck = 0;
    while (mouseCheck < 1) {
      
      //checks if mouse is hovering over the circle
      if (mouseX > x - 35 && mouseX < x + 35 &&
          mouseY > y - 35 && mouseY < y + 35) {

        //day side
        if (mouseX < 350) {
          skyCircle(255, 255, 90, 255, x, y, 100);
        }

        //night side
        else {
          skyCircle(190, 190, 200, 255, x, y, 100);
        }
      }
      
      else {
        //circle is empty if the mouse is not hovering over it
        skyCircle(0, 0, 0, 0, x, y, 100);
      }
      break; //ends the while loop after the first iteration
    }
  }

  sand();
  instructions();
  
}

//circles
function skyCircle(r, g, b, a, x, y, Radius) {
  fill(r, g, b, a);
  stroke("white");
  strokeWeight(2);
  circle(x, y, Radius);
}

//draws the sky background
function skyBackground(r, g, b, x, y, w, h) {
  noStroke();
  fill(r, g, b);
  rect(x, y, w, h);
}

//sand on the beach
function sand() {
  noStroke();
  fill(237, 206, 138);
  rect(0, 500, 700, 200);
}

function instructions() {
  textAlign(CENTER, CENTER);
  textSize(25);
  textStyle(BOLD);
  textFont("Comic Sans MS");
  fill(120, 75, 35);
  text("Hover over the circles to activate the sun and moon!", 350, 600);
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