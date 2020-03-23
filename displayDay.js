//displays daytime

let bgDay = { //day background
  r: 207,
  g: 225,
  b: 255
}

function displayDay() {
  background(bgDay.r, bgDay.g, bgDay.b);
  //calls for sun and mountain objects methods
  sun.display();
  sun.move();
  sun.bounce();
  mountain1.display();
  mountain2.display();
}