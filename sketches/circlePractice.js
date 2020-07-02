let x, y, radius, direction;

function setup() {
  createCanvas(800, 800);
  frameRate(30);
  x = 400;
  y = 400;
  radius = 100;
  direction = true;
}

function draw() {
  background('#000000');

  drawCircle(x, y, radius);

  if (direction) {
    if (radius < 0) {
      direction = false;
    }
  } else {
    if (radius > 100) {
      direction = true;
    }
  }

  if (direction) {
    radius -= 0.8;
  } else {
    radius += 0.8;
  }
}

function drawCircle(centerX, centerY, radius) {
  let weight = 0.2;
  let diameter = 10;
  for (let angle = 0; angle < 1440; angle += 1) {
    diameter += 0.15;
    radius += 0.45;
    weight += 0.1;
    let rad = radians(angle);
    let x = centerX + radius * cos(rad);
    let y = centerY + radius * sin(rad);
    stroke('#408ac9');
    strokeWeight(1.5);
    noFill();
    ellipse(x, y, diameter * random(), diameter * random());
  }
}

strokeWeight(0.4);
noFill();
ellipse(x1 + i, y1 + i, height * random(), width * random());
