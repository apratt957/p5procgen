const step = 100;
const colors3 = ['#408ac9', '#fcce09', '#f04924'];

function randomColor(colorArray) {
  let randomIdx = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomIdx];
}

function setup() {
  createCanvas(800, 800);
  background('#000000');
  noLoop();
}

function draw() {
  const weight = 30;
  for (let x = 0; x < 800; x += step) {
    for (let y = 0; y < 800; y += step) {
      let leftOrRight = Math.random() <= 0.5;

      if (x > 200 - step && x < 600 && y < 600 && y > 100 - step) continue;
      if (leftOrRight) {
        stroke(randomColor(colors3));
        hollowEllipseLine(x, y, 30, 30, weight);
      } else {
        stroke(randomColor(colors3));
        // brushLine(x + step, y, x, y + step, weight);
        hollowEllipseLine(x, y, 30, 30, weight);
      }
    }
  }

  // for (let x = 200 - step; x < 600; x += step / 30) {
  //   for (let y = 100 - step; y < 600; y += step / 50) {
  //     stroke(randomColor(colors3));
  //     strokeWeight(3);
  //     point(
  //       x + Math.floor(Math.random() * step),
  //       y + Math.floor(Math.random() * step)
  //     );
  //   }
  // }
}

function brushLine(x1, y1, x2, y2, weight) {
  for (let i = 0; i < weight * 5; i++) {
    let theta = random(TWO_PI);
    let nx1 = x1 + random(weight / 2) * cos(theta);
    let ny1 = y1 + random(weight / 2) * sin(theta);
    let nx2 = x2 + random(weight / 2) * cos(theta);
    let ny2 = y2 + random(weight / 2) * sin(theta);
    strokeWeight(0.5);
    line(nx1, ny1, nx2, ny2);
  }
}

function hollowEllipseLine(x1, y1, height, width, weight) {
  for (let i = 0; i < weight * 2; i++) {
    strokeWeight(0.4);
    noFill();
    ellipse(x1 + i, y1 + i, height * random(), width * random());
  }
}
