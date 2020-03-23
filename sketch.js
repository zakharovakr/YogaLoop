/*by Kristina Zakharova, 03/20/2020
link to my blog post about the project: https://kristinazakharova.wordpress.com/2020/03/20/the-final-project-vestibule/
My final project is displaying an animation of a person practicing yoga in a loop. Day changes to night, night changes to day, but he is still going through his Sun Salutation practice. As you initially run the code, you see a static picture with mountains in the background and written instructions for intercation. As you press enter, the animation begins, as you press esc it pauses and as you press space bar it resets (shows the    initial static picture). Additionally, as the animation runs, you can press and hold your mouse to get some information on benefits of the Sun      Salutation practice. Enjoy! 

P.S. Credits to Professor D for the star constructor function from project "Constructor Functions", the Coding Train team and Dan Shiffman for all the tutorials, especially the one on "Objects and Images" (https://www.youtube.com/watch?v=i2C1hrJMwz0&list=PLSm_gCu5TrK9m0AFgGjQmUe0gRY-F-G5d&index=33&t=487s) and Patrick Walsh for helping me to figure out how to keep changing the sun color (file  landscape.js) 
*/

function setup() {
  //draw the first static picture on the screen
  createCanvas(500, 500);
  frameRate(20); //frames shown within a second 
  displayDay();
  displayText();
}

function draw() {
  //doesn't draw anything initially 
  keyPressed();
  mousePressed();
}

function keyPressed() {
  if (keyCode === ENTER) {
    loop();
    startAnimation(); //animation starts only when ENTER is pressed 
  }
  if (keyCode === 27) { //esc
    noLoop();
  }
  //resets animation
  if (keyCode === 32) { //space bar
    loop();
    sun.x = 75;
    sun.y = 75;
    sun.r = 234;
    sun.g = 85;
    sun.b = 46;
    displayDay();
    displayText();
  }
}

function mousePressed() {
  if (mouseIsPressed) { //displays a block of text on top of the animation when mouse is down

    giveInfo();
  }
}