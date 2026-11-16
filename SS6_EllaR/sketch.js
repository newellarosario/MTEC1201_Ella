


//let circleXPositions = [0, 125, 225, 350, 700, 575, 475];
//let circleYPositions = [500, 350, 225, 100, 500, 350, 225];
let circleXPos = [0, 175, 350, 525, 700];
let circleYPos = [700, 525, 350, 175, 0];

function setup() {
  createCanvas(700, 700);
  
}

function draw() {
  skyBackground(90, 115, 255, 0, 0, 350, 700);
  skyBackground(10, 10, 110, 350, 0, 350, 700);
  for (let i = 0; i < circleXPos.length; i++) {   
        if (mouseX < 350) {
          
          if (mouseX > circleXPos[i] - 35 && circleXPos[i] < circleXPos[i] + 35 &&
          circleYPos[i] > circleYPos[i] - 35 && circleYPos[i] < circleYPos[i] + 35) {
          
          skyCircle(255, 255, 90, 255, circleXPos [i], circleYPos[i], 100);
        }
        else {
          skyCircle(0,0,0,0, circleXPos[i], circleYPos[i], 100)
        }
      }
        if (mouseX > 350){
          if (mouseX > circleXPos[i] - 35 && circleXPos[i] < circleXPos[i] + 35 &&
          circleYPos[i] > circleYPos[i] - 35 && circleYPos[i] < circleYPos[i] + 35) {
          skyCircle(190, 190, 200, 255, circleXPos [i], circleYPos[i], 100);
        }
        else {
          skyCircle(0,0,0,0, circleXPos[i], circleYPos[i], 100)
        }
    }
       circleYPos [i] += - 2 ; //moves the circles vertically
       circleXPos [i] += 2; //moves the circles horizontally
  if (i > circleXPos.length){
    let i = 0
  }

  }
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


