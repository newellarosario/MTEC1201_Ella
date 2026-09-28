/* Ella R. "A day at the beach" 
This semester, I wanted to create a program that would
immate the movement of the sky and bring the user into a depiction of a beach
at specific times of the day.
I want to immitate the way that the clouds move, the sun sets, the moon rises, etc.
9/28/2026 - This first sketch ties into it because it would help me sketch out where
different shapes would be in the sky. I wanted to paint the sky with a sun setting and
the moon slowly rising. This is the first part of many depictions of the beach at different times of the day.

10/5/2026 - I added commands that qould allow the mouse to control the movement of the shapes on the screen.
In this case, the mouse would control the movement of the sun and the moon. 
*/

let x = 0 
let y = 500

function setup() {
  createCanvas(700, 700);
    background(92, 117, 255);
}
 

function draw() {
  background(92, 117, 255);
  fill(255,225,87);
  strokeWeight(2);
  circle(x, y, 200);
  x++
  y++

  noStroke();
  fill(237,206,138);
  rect(0, 500, 700, 200);

}
function draw() {
  
  strokeWeight(5);
  fill(225, 230, 230);
  arc(550, 100, 200, 190, PI + QUARTER_PI, TWO_PI);
  
  noStroke();
  fill(237,206,138);
  rect(0, 500, 700, 200);
}
