const colors = ['#ED6A5A', '#F4F1BB', '#9BC1BC', '#5D576B', '#E6EBE0'];
const colors2 = ['#3D348B', '#7678ED', '#F7B801', '#F18701', '#F35B04'];
const colors3 = ['#408ac9', '#fcce09', '#f04924'];
const colors4 = ['#EA526F', '#E76B74', '#E4AF5F', '#937D64'];
const colors5 = ['#FCB97D', '#EDD892', '#C6B89E', '#B5B8A3', '#AABA9E'];
const randomColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};
const randomNum = Math.floor(Math.random() * 255);

const drawTriangle = (scale, x, y) => {
  triangle(
    x * scale,
    y * scale + scale,
    x * scale + scale,
    y * scale,
    x * scale + scale * 2,
    y * scale + scale
  );
};

const drawEllipse = (scale, x, y) => {
  ellipse(x * scale + 5, y * scale + 5, scale, scale);
};

// Get bit at pos(ition) for num(ber)
const get_bit = (num, pos) => (num >> pos) & 1;

// Combines 3 bits into an integer between 0 and 7
const combine = (b1, b2, b3) => (b1 << 2) + (b2 << 1) + (b3 << 0);

// Returns given number in the form of a tertiary function (a rule)
const get_rule = (num) => (b1, b2, b3) => get_bit(num, combine(b1, b2, b3));

const cells_across = 800; // Number of cells horizontally in the grid
const cell_scale = 4 * 10; // Size of each cell
const cells_down = 800; // Number of cells vertically in the grid

const rule = get_rule(randomNum); // The rule to display

function draw_rule(rule, width, height) {
  let grid = [];
  let row = initial_random_row(width);
  grid.push(row);
  for (let i = 0; i < height; i++) {
    row = next_row(row, rule);
    grid.push(row);
  }
  return grid;
}

function next_row(old, rule) {
  return old.map((_, i) => rule(old[i - 1], old[i], old[i + 1]));
}

function initial_random_row(width) {
  return Array.from(Array(width), (_) => Math.floor(Math.random() * 2));
}
const graph = draw_rule(rule, cells_across, cells_down);

const color1 = randomColor(colors3);
const color2 = randomColor(colors3);
const color3 = randomColor(colors3);
const blue = colors3[0];
const yellow = colors3[1];
const red = colors3[2];

function setup() {
  createCanvas(cells_across, cells_down);
  background('#F4DCC9');
  // background('#585B56');
  noLoop();
  // noStroke();
}

function draw() {
  const scale = 70;
  strokeWeight(5);
  for (let y = 1; y < cells_down / scale; y++) {
    for (let x = 1; x < cells_across / scale; x++) {
      // let cell = graph[y][x];
      // let north = graph[y - 1][x];
      // let south = graph[y + 1][x];
      // let east = graph[y][x + 1];
      // let west = graph[y][x - 1];
      // fill(randomColor(colors3));
      // if (
      //   cell === 1 &&
      //   x > 0 &&
      //   y > 0 &&
      //   x < cells_across / scale - 1 &&
      //   y < cells_across / scale - 1
      // ) {
      //   if (north && south && east && west) {
      //     beginShape();
      //     curveVertex(x * scale + scale * 0.33, y * scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale * 0.33);
      //     curveVertex(x * scale + scale, y * scale + scale * 0.33);
      //     curveVertex(x * scale + scale, y * scale + scale * 0.66);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale * 0.66);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale);
      //     curveVertex(x * scale + scale * 0.33, y * scale + scale);
      //     curveVertex(x * scale + scale * 0.33, y * scale + scale * 0.66);
      //     curveVertex(x * scale, y * scale + scale * 0.66);
      //     curveVertex(x * scale, y * scale + scale * 0.33);
      //     curveVertex(x * scale + scale * 0.33, y * scale + scale * 0.33);
      //     curveVertex(x * scale + scale * 0.33, y * scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale * 0.33);
      //     endShape();
      //   } else if (north && east) {
      //     beginShape();
      //     curveVertex(x * scale + scale * 0.33, y * scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale * 0.33);
      //     curveVertex(x * scale + scale, y * scale + scale * 0.33);
      //     curveVertex(x * scale + scale, y * scale + scale * 0.66);
      //     curveVertex(x * scale + scale * 0.33, y * scale + scale * 0.66);
      //     curveVertex(x * scale + scale * 0.33, y * scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale * 0.33);
      //     endShape();
      //   } else if (north && west) {
      //     beginShape();
      //     curveVertex(x * scale + scale * 0.33, y * scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale * 0.66);
      //     curveVertex(x * scale, y * scale + scale * 0.66);
      //     curveVertex(x * scale, y * scale + scale * 0.33);
      //     curveVertex(x * scale + scale * 0.33, y * scale + scale * 0.33);
      //     curveVertex(x * scale + scale * 0.33, y * scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale * 0.66);
      //     endShape();
      //   } else if (south && east) {
      //     beginShape();
      //     curveVertex(x * scale + scale * 0.33, y * scale + scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale * 0.66);
      //     curveVertex(x * scale + scale, y * scale + scale * 0.66);
      //     curveVertex(x * scale + scale, y * scale + scale * 0.33);
      //     curveVertex(x * scale + scale * 0.33, y * scale + scale * 0.33);
      //     curveVertex(x * scale + scale * 0.33, y * scale + scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale * 0.66);
      //     endShape();
      //   } else if (south && west) {
      //     beginShape();
      //     curveVertex(x * scale + scale * 0.33, y * scale + scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale * 0.33);
      //     curveVertex(x * scale, y * scale + scale * 0.33);
      //     curveVertex(x * scale, y * scale + scale * 0.66);
      //     curveVertex(x * scale + scale * 0.33, y * scale + scale * 0.66);
      //     curveVertex(x * scale + scale * 0.33, y * scale + scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale);
      //     curveVertex(x * scale + scale * 0.66, y * scale + scale * 0.33);
      //     endShape();
      //   } else if (east && west) {
      //     beginShape();
      //     vertex(x * scale, y * scale + scale * 0.33);
      //     vertex(x * scale + scale, y * scale + scale * 0.33);
      //     vertex(x * scale + scale, y * scale + scale * 0.66);
      //     vertex(x * scale, y * scale + scale * 0.66);
      //     vertex(x * scale, y * scale + scale * 0.33);
      //     endShape();
      //   } else if (north && south) {
      //     beginShape();
      //     vertex(x * scale + scale * 0.33, y * scale);
      //     vertex(x * scale + scale * 0.66, y * scale);
      //     vertex(x * scale + scale * 0.66, y * scale + scale);
      //     vertex(x * scale + scale * 0.33, y * scale + scale);
      //     vertex(x * scale + scale * 0.33, y * scale);
      //     endShape();
      //   }
      // }
      if (
        x > 0 &&
        y > 0 &&
        x < cells_across / scale - 1 &&
        y < cells_across / scale - 1
      ) {
        fill(color2);
        rect(x * scale, y * scale, scale, scale);
      }
      if (
        graph[y][x] === 0 &&
        x > 0 &&
        y > 0 &&
        x < cells_across / scale - 1 &&
        y < cells_down / scale - 1
      ) {
        fill(colors3[0]);
        beginShape();
        vertex(x * scale, y * scale);
        vertex(x * scale + scale / 2, y * scale);
        vertex(x * scale + scale / 3, y * scale + scale);
        vertex(x * scale - scale / 6, y * scale + scale);
        endShape(CLOSE);
      } else {
        fill(colors3[1]);
        if (
          y > 0 &&
          x > 0 &&
          x < cells_across / scale - 1 &&
          y < cells_down / scale - 1
        ) {
          // drawEllipse(scale, x + 1, y);
        }
      }
    }
  }
}
