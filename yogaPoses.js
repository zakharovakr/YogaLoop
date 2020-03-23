//this file preloads graphics (yoga pictures) and organizes them into an array

let yogaPoses = []; //declaring an empty array

function preload() {
  for (let i = 0; i < 10; i++) {
    yogaPoses[i] = loadImage(`assets/yogaPose${i}.png`); //using template literal here instead of concatenation 
  }
}