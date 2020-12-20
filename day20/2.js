// Object tile
// num: Number
// data: 2d array

const data = require('fs').readFileSync("./input.txt", { encoding: "utf-8" }).trim();


const TILES = []
const TILE_SIZE = 10

const lines = data.split("\n");
let i = 0;

// POPULATE TILES
while (i < lines.length){
    const obj = {}
    obj.number = lines[i].match(/Tile ([0-9]+):/)[1];
    obj.tile = [];
    i++;
    for (let j = 0; j < TILE_SIZE; j++){
        obj.tile[j] = lines[i]
        i++;
    }
    TILES.push(obj)
    i++;
}

// convert tile 2d array to array of borders
function tile2borders(tile){
    const borderTop = [...tile[0]]
    const borderRight = [];
    for (let i = 0; i < TILE_SIZE; i++){
        borderRight.push(tile[i][TILE_SIZE - 1])
    }
    const borderBottom = [...tile[TILE_SIZE - 1]]
    const borderLeft = [];
    for (let i = 0; i < TILE_SIZE; i++){
        borderLeft.push(tile[i][0])
    }
    return [borderTop.join(''), borderRight.join(''), borderBottom.join(''), borderLeft.join('')];
}

// flip the tile borders is equivalent to reverse top and bottom border
// borders is an array with four borders (top, right, bottom, left)
function flipTile(tile){
    const borderTop = [...tile.borders[0]].reverse();
    const borderRight = [...tile.borders[1]].reverse();
    const borderBottom = [...tile.borders[2]].reverse();
    const borderLeft = [...tile.borders[3]].reverse();
    return ({number: tile.number, borders :[borderTop.join(''), borderRight.join(''), borderBottom.join(''), borderLeft.join('')]})
}

//console.log(tile2borders(TILES[0].tile))

//console.log(TILES)

const TILES_BORDERS = TILES.map((t) => ({number:t.number, borders: tile2borders(t.tile)}))
const TILES_BORDERS_FLIPPED = TILES_BORDERS.map((tile) => flipTile(tile))

const TOTAL_TILES = [...TILES_BORDERS_FLIPPED, ...TILES_BORDERS]


console.log(TOTAL_TILES)
// pour chaque tuile
 // verifier pour chaque cote
   // si on trouve 3 autres tuiles (recto ou verso) qui match les bords, passez a la tuile suivante
   // sinon ajouter a un tableau cotes et retirer la tuile

const CORNER_TILES = [];
for (tile of TOTAL_TILES){
    let matchBorders = 0;
    for (border of tile.borders){
        for (otherTile of TOTAL_TILES){
            if (otherTile.number === tile.number) continue;
            if (otherTile.borders.includes(border)) {
                matchBorders++
            }
        }
    }
    if (matchBorders <= 2 && !CORNER_TILES.includes(tile.number)){
        CORNER_TILES.push(tile.number)
    }
}

console.log(CORNER_TILES.reduce((a, b) => a*b))

