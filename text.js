//this file contains all the text used in the project

//display initial text on the screen
function displayText() {
  let textX = 30;
  let yInit = 200;
  let yStep = 40;
  textSize(32);
  fill(0, 102, 153);
  text('Press ENTER to start animation', textX, yInit);
  text('Press ESC to pause', textX, yInit + yStep);
  text('Hold your mouse down to get', textX, yInit + yStep * 2);
  text('more info', textX, yInit + yStep * 3);
  text('Press SPACE BAR to reset', textX, yInit + yStep * 4);
}

//info displayed to user once mouse is down
function giveInfo() {
  rectMode(CENTER);
  let squareSize = 400; //size of the shape onto which the text is shown
  let info = 'Regular practice of Sun Salutation improves the functions of the heart, liver, intestine, stomach, chest, throat, and legs – basically, the whole body.';
  fill(0, 0, 255, 75);
  rect(width / 2, height / 2, squareSize, squareSize);

  fill(255);
  text(info, width / 2, height / 2 + 75, squareSize, squareSize); // Text wraps within text box
}

//array containing text that is shown as yoga poses change (connected to the movement of the sun on the X coordinate in file displayYoga.js
textToDisplay = [{
    size: 32,
    x: 10,
    y1: 30,
    y2: 65,
    r: 0,
    g: 102,
    b: 153,
    show: function() {
      textSize(this.size);
      fill(this.r, this.g, this.b);
      text('Tadasana (Mountain Pose)', this.x, this.y1);
    }
  }, {
    size: 32,
    x: 10,
    y1: 30,
    y2: 65,
    r: 0,
    g: 102,
    b: 153,
    show: function() {
      textSize(this.size);
      fill(this.r, this.g, this.b);
      text('Urdhva Hastasana', this.x, this.y1);
      text('(Upward Salute)', this.x, this.y2);
    }
  }, {
    size: 32,
    x: 10,
    y1: 30,
    y2: 65,
    r: 0,
    g: 102,
    b: 153,
    show: function() {
      textSize(this.size);
      fill(this.r, this.g, this.b);
      text('Uttanasana', this.x, this.y1);
      text('(Standing Forward Bend)', this.x, this.y2);
    }
  },
  {
    size: 32,
    x: 10,
    y1: 30,
    y2: 65,
    r: 0,
    g: 102,
    b: 153,
    show: function() {
      textSize(this.size);
      fill(this.r, this.g, this.b);
      text('Ardha Uttanasana', this.x, this.y1);
      text('(Half Forward Bend)', this.x, this.y2);
    }
  }, {
    size: 32,
    x: 10,
    y1: 30,
    y2: 65,
    r: 0,
    g: 102,
    b: 153,
    show: function() {
      textSize(this.size);
      fill(this.r, this.g, this.b);
      text('Phalakasana (Plank Pose)', this.x, this.y1);
    }
  }, {
    size: 32,
    x: 10,
    y1: 30,
    y2: 65,
    r: 0,
    g: 102,
    b: 153,
    show: function() {
      textSize(this.size);
      fill(this.r, this.g, this.b);
      text('Urdhva Mukha Svanasana', this.x, this.y1);
      text('(Upward-Facing Dog)', this.x, this.y2);

    }
  }, {
    size: 32,
    x: 10,
    y1: 30,
    y2: 65,
    r: 0,
    g: 102,
    b: 153,
    show: function() {
      textSize(this.size);
      fill(this.r, this.g, this.b);
      text('Adho Mukha Svanasana', this.x, this.y1);
      text('(Downward-Facing Dog)', this.x, this.y2);

    }
  }, {
    size: 32,
    x: 10,
    y1: 30,
    y2: 65,
    r: 0,
    g: 102,
    b: 153,
    show: function() {
      textSize(this.size);
      fill(this.r, this.g, this.b);
      text('Ardha Uttanasana', this.x, this.y1);
      text('(Half Forward Bend)', this.x, this.y2);

    }
  }, {
    size: 32,
    x: 10,
    y1: 30,
    y2: 65,
    r: 0,
    g: 102,
    b: 153,
    show: function() {
      textSize(this.size);
      fill(this.r, this.g, this.b);
      text('Urdhva Hastasana', this.x, this.y1);
      text('(Upward Salute)', this.x, this.y2);

    }
  }, {
    size: 32,
    x: 10,
    y1: 30,
    y2: 65,
    r: 0,
    g: 102,
    b: 153,
    show: function() {
      textSize(this.size);
      fill(this.r, this.g, this.b);
      text('Tadasana (Mountain Pose)', this.x, this.y1);
    }
  }
];