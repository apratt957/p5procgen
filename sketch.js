function randomXCoordinate() {
  return Math.floor((Math.random() * windowWidth) / 2);
}
function randomYCoordinate() {
  return Math.floor(Math.random() * windowHeight);
}
function randomSize() {
  return Math.floor(Math.random() * 100) + 30;
}
function randomNum(num) {
  return Math.floor(Math.random() * num);
}
function randomEllipse() {
  return ellipse(
    randomCoordinate(),
    randomCoordinate(),
    randomSize(),
    randomSize()
  );
}
function randomCurve() {
  return curve(
    randomXCoordinate(),
    randomYCoordinate(),
    randomXCoordinate(),
    randomYCoordinate(),
    randomXCoordinate(),
    randomYCoordinate(),
    randomXCoordinate(),
    randomYCoordinate()
  );
}

const colors = ['#ED6A5A', '#F4F1BB', '#9BC1BC', '#5D576B', '#E6EBE0'];

function setup() {
  createCanvas(windowWidth / 2, windowHeight - 40);
  noLoop();
  noFill();
}

function draw() {
  background('#F4DCC9');
  strokeWeight(30);

  for (let i = 0; i < 20; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    stroke(color);
    randomCurve();
  }
}
