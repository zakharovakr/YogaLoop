//this file changes day to night according to the sun coordinates and calls displayYoga() function to show yoga poses and the text that is shown with them

function startAnimation() {
  displayDay();
  if ((sun.x > width / 2) || (sun.y > height / 2)) {
    displayNight();
  }
  displayYoga();
}