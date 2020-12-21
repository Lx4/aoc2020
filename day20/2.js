// Object tile
// num: Number
// data: 2d array

const data = require('fs').readFileSync("./sample.txt", { encoding: "utf-8" }).trim();


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
function flipAxis(tile){
    const borderTop = [...tile.borders[0]].reverse();
    const borderRight = [...tile.borders[1]].reverse();
    const borderBottom = [...tile.borders[2]].reverse();
    const borderLeft = [...tile.borders[3]].reverse();
    return ({number: tile.number, borders :[borderTop.join(''), borderRight.join(''), borderBottom.join(''), borderLeft.join('')]})
}

// border0 TOP
// border1 RIGHT
// border2 BOTTOM
// border3 LEFT
function rotateTileRight(tile){
    [tile.borders[0], tile.borders[1], tile.borders[2], tile.borders[3]] = [tile.borders[3], tile.borders[0], tile.borders[1], tile.borders[2]]
}

const TILES_BORDERS = TILES.map((t) => ({number:t.number, borders: tile2borders(t.tile)}))
const TILES_BORDERS_FLIPPED = TILES_BORDERS.map((t) => flipAxis(t))

// search a tile that is a corner
for (tile of TILES_BORDERS){
    // count matching borders
    console.log(tile.number)
    console.log(matchBorders(tile, TILES_BORDERS))
}

// tile is the current looking tile, tiles is the list we are searching in
function matchBorders(tile, tiles){
    let bordersMatched = 0;
    tiles = tiles.filter((t) => t.number !== tile.number);
    for (border of tile.borders){
        // check if border exist in tiles
        //console.log(border)
        for (searchedTile of tiles){
            //console.log(searchedTile.borders)
            if (searchedTile.borders.includes(border) 
                || flipAxis(searchedTile).borders.includes(border)) {
                bordersMatched++;
                // remove the tile from founded ones
                tiles = tiles.filter((t) => t.number !== searchedTile.number)
                break;
            }
        }
    }
    return bordersMatched;
}

const BOARD_SIZE = 3
// board = 3 x 3
const BOARD = new Array(BOARD_SIZE).map((c) => new Array(BOARD_SIZE))
console.log(BOARD)

// for (let i = 0; i < BOARD_SIZE; i++){
//     for (let j = 0; j < BOARD_SIZE; j++){
        
//     }
// }