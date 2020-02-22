const colors = ['#ED6A5A', '#F4F1BB', '#9BC1BC', '#5D576B', '#E6EBE0'];
const colors2 = ['#3D348B', '#7678ED', '#F7B801', '#F18701', '#F35B04'];
const colors3 = ['#408ac9', '#fcce09', '#f04924'];
const colors4 = ['#EA526F', '#E76B74', '#E4AF5F', '#937D64'];
const colors5 = ['#FCB97D', '#EDD892', '#C6B89E', '#B5B8A3', '#AABA9E'];
const randomColor = colors => {
  return colors[Math.floor(Math.random() * colors.length)];
};
const randomNum = Math.floor(Math.random() * 250);

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
const get_rule = num => (b1, b2, b3) => get_bit(num, combine(b1, b2, b3));

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
  return Array.from(Array(width), _ => Math.floor(Math.random() * 2));
}
const graph = draw_rule(rule, cells_across, cells_down);

const color1 = randomColor(colors5);
const color2 = randomColor(colors5);
const color3 = randomColor(colors5);
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
  const scale = 80;
  strokeWeight(5);
  for (let y = 0; y < cells_down / scale; y++) {
    for (let x = 0; x < cells_across / scale; x++) {
      0;
      if (
        graph[y][x] === 0 &&
        x > 0 &&
        y > 0 &&
        x < cells_across / scale - 1 &&
        y < cells_down / scale - 1
      ) {
        fill(color1);
        beginShape();
        vertex(x * scale, y * scale);
        vertex(x * scale + 30, y * scale);
        vertex(x * scale + 20, y * scale + 60);
        vertex(x * scale - 10, y * scale + 60);
        endShape(CLOSE);
      } else {
        if (x % 2) {
          fill(color2);
        } else {
          fill(randomColor(colors4));
        }
        if (
          y > 0 &&
          x > 0 &&
          x < cells_across / scale - 2 &&
          y < cells_down / scale - 1
        ) {
          drawEllipse(scale, x + 1, y);
        }
      }
    }
  }
}
