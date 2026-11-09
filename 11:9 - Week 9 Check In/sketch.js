function setup() {
  createCanvas(400,400);
}

function draw() {
  background (200);

  fill(200);
  //for loop drawing vertical lines from left to right

  for (let x = 0; x < width; x = x + 50)
  {
    for (let y = 0; y < height ; y = y + 50)
    {
      let rectRight = x + 50;
      let rectBottom = y + 50;
      if (mouseX > x && mouseX < rectRight && mouseY > y && mouseY < rectBottom)
      {
        fill ("red");
      } else {
        fill (200);
      }
      rect (x, y, 50, 50);
    }
  }

}
