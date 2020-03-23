//animates the silhouette practicing yoga

//this function shows a certain yoga pose from the yogaPoses[] array and displays text with the name of this pose in sanskrit and English, according to the X coordinate of the sun object as the sun is moving (setting down and rising up - bouncing) 
function displayYoga() {
  let sunInit = 75; //initial sun position on the X coordinate
  let step = 30; // with every 30px the sun has moved, a new pose is shown
  for (let i = 0; i < yogaPoses.length; i++) {
    if (sun.x <= sunInit + step) {
      image(yogaPoses[0], width / 3, height / 3);
      textToDisplay[0].show();
    } else if ((sun.x > sunInit + step) && (sun.x <= sunInit + step * 2)) {
      image(yogaPoses[1], width / 3, height / 3);
      textToDisplay[1].show();
    } else if ((sun.x > sunInit + step * 2) && (sun.x <= sunInit + step * 3)) {
      image(yogaPoses[2], width / 3, height / 3);
      textToDisplay[2].show();
    } else if ((sun.x > sunInit + step * 3) && (sun.x <= sunInit + step * 4)) {
      image(yogaPoses[3], width / 3, height / 3);
      textToDisplay[3].show();
    } else if ((sun.x > sunInit + step * 4) && (sun.x <= sunInit + step * 5)) {
      image(yogaPoses[4], width / 3, height / 3);
      textToDisplay[4].show();
    } else if ((sun.x > sunInit + step * 5) && (sun.x <= sunInit + step * 6)) {
      image(yogaPoses[5], width / 3, height / 3);
      textToDisplay[5].show();
    } else if ((sun.x > sunInit + step * 6) && (sun.x <= sunInit + step * 7)) {
      image(yogaPoses[6], width / 3, height / 3);
      textToDisplay[6].show();
    } else if ((sun.x > sunInit + step * 7) && (sun.x <= sunInit + step * 8)) {
      image(yogaPoses[7], width / 3, height / 3);
      textToDisplay[7].show();
    } else if ((sun.x > sunInit + step * 8) && (sun.x <= sunInit + step * 9)) {
      image(yogaPoses[8], width / 3, height / 3);
      textToDisplay[8].show();
    } else {
      image(yogaPoses[9], width / 3, height / 3);
      textToDisplay[9].show();
    }
  }
}