//
let circleX;
let circleY;

function setup() {
  createCanvas(700, 700);
  
}

function draw() {
circleX = 0;
circleY = 500;

  background ("white");
  
  skyBackground(90, 115, 255, 0, 0, 350, 700);
  skyBackground(10, 10, 110, 350, 0, 350, 700);

  strokeWeight(2);
  fill( "white");
  circle (circleX, circleY, 100);

  circleX = circleX + 100
  circleY = circleY + 100


  sand();

  /*for (let i = 0; x < 350; i+=100){
    noStroke();
    fill ("black");
    circle (i, 500, 100);
  }*/
  
  }
    
 /* while(mouseY >= 600){
    sand();
    skyCircle(255, 225, 90, mouseX, mouseY, 200);
  } */
  
  
 /* if (mouseY >= 600) {
    background (10 , 10, 110);
    sand();
    skyCircle (190, 190, 200, 450, 300, 200);
  } */


/* function skyCircle(r, g, b, x, y, Radius){
  fill (r, g, b);
  noStroke();
  circle (x, y, Radius);
} */

function skyBackground (r, g, b, x, y, w, h){
  noStroke();
  fill (r, g, b);
  rect(x, y, w, h);
}
function sand() {
  noStroke();
  fill (237, 206, 138);
  rect (0, 500, 700, 200);
}
