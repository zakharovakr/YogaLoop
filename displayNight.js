// displays night time, creates a star constructor function, shows the stars

let bgNight = { //night background 
  r: 39,
  g: 34,
  b: 54
}

//creates a star constructor function 
let stars = []; //empty array

function Star() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.display = function() {
    // random grayscale for twinkle effect.
    stroke(random(255));
    point(this.x, this.y);
  }
}

function displayNight() {
  background(bgNight.r, bgNight.g, bgNight.b);
  for (let i = 0; i < 200; i++) {
    // Code borrowed from Professor D to make an array of 200 star objects from the Star constructor based on the size of the array.

    stars[i] = new Star();
  }
  for (let i = 0; i < stars.length; i++) {
    stars[i].display();
  }
  mountain1.display();
  mountain2.display();
}