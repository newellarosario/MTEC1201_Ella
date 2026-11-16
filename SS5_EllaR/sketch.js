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
   
   //fills the circles with the correct color based on the 