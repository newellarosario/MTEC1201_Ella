/* Ella R. "A day at the beach" 
This semester, I wanted to create a program that would
immate the movement of the sky and bring the user into a depiction of a beach
at specific times of the day.
I want to immitate the way that the clouds move, the sun sets, the moon rises, etc.
This first sketch ties into it because it would help me sketch out where
different shapes would be in the sky. I wanted to paint the sky with a sun setting and
the moon slowly rising. This is the first part of many depictions of the beach at different times of the day.
*/

function setup() {
  createCanvas(700, 700);
   background(92, 117, 255);
}

function draw() {
  
  strokeWeight(5);
  fill(225, 230, 230);
  arc(550, 100, 200, 190, PI + QUARTER_PI, TWO_PI);

  fill(345,202,47)
  strokeWeight(7);
  circle(350, 500, 350);
  
  fill(212,17,6)
  strokeWeight(3);
  triangle(550, 425, 550, 475, 600, 450);
  
  strokeWeight(2.5);
  line(550, 475, 550, 500);

  noStroke();
  fill(237,206,138);
  rect(0, 500, 700, 200);

  
  
}
