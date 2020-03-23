//this file stores all the information about the sun and mountain objets

let goingDown = true; //a boolean value to check if the sun is setting 

let sun = {
  xInit: 75, //initial X position, doesn't change
  xStop: 370, //reverses its track
  x: 75, //initial X position, increments later for creating the moving effect
  y: 75,
  diam: 100,
  r: 234,
  g: 85,
  b: 46,
  speed: 1,
  display: function() { //method to show the sun
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.diam, this.diam);
  },
  move: function() { //method to move it
    this.x = this.x + this.speed;
    this.y = this.x + this.speed;
    if (goingDown) {
      if ((this.x > sun.xInit) || (this.x < sun.xStop)) {
        //changing the sun color from red to yellow
        this.g++; //increasing the amount of green
        this.b--; //decreasing blue 
      }
    } else {
      //changing the sun color back to red
      this.g--; //decreasing the amount of green
      this.b++; //increasing blue 
    }

  },
  bounce: function() {

    if ((this.x > sun.xStop)) {
      goingDown = false; //setting the boolean value to false in this case
      this.speed = this.speed * -1;
      this.g--; //decreasing the amount of green
      this.b++; //increasing blue 
    }
    if ((this.x < sun.xInit)) {
      goingDown = true; //setting the boolean value to true in this case
      this.speed = this.speed * -1;
      this.g--; //decreasing the amount of green
      this.b++; //increasing blue 
    }
  }
}

//drawing mountains 
//the further mountain
let mountain1 = {
  mountColor: 220,
  snowPeakColor: 240,
  stroke: 0,
  x1: 360,
  y1: 130,
  x2: 760,
  y2: 500,
  x3: -40,
  y3: 500,
  xPoint1: 360,
  yPoint1: 130,
  xPoint2: 485,
  yPoint2: 246,
  xPoint3: 390,
  yPoint3: 200,
  xPoint4: 360,
  yPoint4: 250,
  xPoint5: 320,
  yPoint5: 217,
  xPoint6: 225,
  yPoint6: 255,
  display: function() {
    //drawing a triangle
    fill(this.mountColor);
    strokeWeight(this.stroke);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    //drawing the snow peak shape
    fill(this.snowPeakColor);
    strokeWeight(this.stroke);
    beginShape(); //begins recording vertices for a shape
    vertex(this.xPoint1, this.yPoint1); //top of the peak
    vertex(this.xPoint2, this.yPoint2);
    vertex(this.xPoint3, this.yPoint3);
    vertex(this.xPoint4, this.yPoint4);
    vertex(this.xPoint5, this.yPoint5);
    vertex(this.xPoint6, this.yPoint6);
    endShape(CLOSE); //stops recording vertices
  }
}

//the closer mountain
let mountain2 = {
  mountColor: 230,
  snowPeakColor: 240,
  stroke: 0,
  x1: 100,
  y1: 180,
  x2: 500,
  y2: 500,
  x3: -260,
  y3: 500,
  xPoint1: 100,
  yPoint1: 180,
  xPoint2: 225,
  yPoint2: 280,
  xPoint3: 145,
  yPoint3: 250,
  xPoint4: 120,
  yPoint4: 290,
  xPoint5: 70,
  yPoint5: 260,
  xPoint6: -20,
  yPoint6: 286,
  display: function() {
    //drawing a triangle
    fill(this.mountColor);
    strokeWeight(this.stroke);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    //drawing the snow peak shape
    fill(this.snowPeakColor);
    strokeWeight(this.stroke);
    beginShape();
    vertex(this.xPoint1, this.yPoint1); //top of the peak
    vertex(this.xPoint2, this.yPoint2);
    vertex(this.xPoint3, this.yPoint3);
    vertex(this.xPoint4, this.yPoint4);
    vertex(this.xPoint5, this.yPoint5);
    vertex(this.xPoint6, this.yPoint6);
    endShape(CLOSE); //stops recording vertices
  }
}