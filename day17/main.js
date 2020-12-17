const data = require("fs")
  .readFileSync("input.txt", { encoding: "utf-8" })
  .trim();

const lines = data.split("\n");
const map = lines.map((line) => line.split(""));
console.log(map);

const NUM_CYCLES = 6;
const INIT_STATE_SIZE = lines[0].length;

console.log(INIT_STATE_SIZE);

const CUBE_SIZE = INIT_STATE_SIZE + 2 * NUM_CYCLES;
console.log(CUBE_SIZE);

// z (layers)
let space = new Array(CUBE_SIZE);

// x, y (rows & cols)
for (let i = 0; i < space.length; i++) {
  space[i] = new Array(CUBE_SIZE);
  for (let j = 0; j < space.length; j++) {
    space[i][j] = new Array(CUBE_SIZE);
  }
}

// copy flat layer at the center of cube (z = CUBE_SIZE / 2)
const z_init_pos = CUBE_SIZE / 2;
for (let i = NUM_CYCLES, k = 0; i < INIT_STATE_SIZE + NUM_CYCLES; i++, k++) {
  for (let j = NUM_CYCLES, m = 0; j < INIT_STATE_SIZE + NUM_CYCLES; j++, m++) {
    space[z_init_pos][i][j] = map[k][m];
  }
}

// space is init
console.log(space);

let next_space = JSON.parse(JSON.stringify(space));

function iterate() {
  for (let i = 0; i < space.length; i++) {
    for (let j = 0; j < space.length; j++) {
      for (let k = 0; k < space.length; k++) {
        next_space[i][j][k] = calculateCubeState(space[i][j][k], i, j, k);
      }
    }
  }
  [space, next_space] = [next_space, space]
}

function calculateCubeState(value, i, j, k) {
  let neighbors = 0;
  for (const a of [-1, 0, 1]) {
    for (const b of [-1, 0, 1]) {
      for (const c of [-1, 0, 1]) {
        try {
          if (a === 0 && b === 0 && c === 0) {
            continue;
          }
          if (space[i + a][j + b][k + c] === "#") {
            neighbors++;
          }
        } catch (e) {}
      }
    }
  }
  if (value === '#') {
      if (neighbors === 2 || neighbors === 3) return '#'
      else return '.'
  }
  if (value === '.' || !value) {
      if (neighbors === 3) return "#"
      else return '.'
  }
}

for (let i = 0; i < 6; i++) {
  iterate();
}

const result = space.flat(CUBE_SIZE).filter((v) => v === "#").length;
console.log(result);
