const LINES = require('./input')

const EZSAMPLE = ['esew']

let flippedTiles = [] // array of [x,y] flipped tiles.

for (line of LINES){
    let buffer = ''
    let tile = [0, 0]
    for (let i = 0; i < line.length; i++) {
        buffer += line[i];
        if (isStep(buffer)){
            // execture the step
            tile = step(tile, buffer)
            // clear buffer
            buffer = '';
        }
    }
    // swap tile
    const index = flippedTiles.find(t => t[0] === tile[0] && t[1] === tile[1])
    if (index){
        flippedTiles.splice(index, 1)
    }
    else
        flippedTiles.push(tile)
}

console.log(flippedTiles.length)


// flippedTiles = initial black tiles
for (let i = 0; i < 100; i++){
let newBlackTiles = []
for (let black of flippedTiles){
    if (numBlacks(adjacentsTiles(black), flippedTiles) === 1)
    {
        newBlackTiles.push(black)
    }
}
let whites = whiteCandidates(flippedTiles);
for (let white of whites){
    if (numBlacks(adjacentsTiles(white), flippedTiles) === 2)
        newBlackTiles.push(white)
}
flippedTiles = newBlackTiles;
console.log(flippedTiles.length)
}



function isStep(buffer){
    if (['nw', 'ne', 'w', 'e', 'sw', 'se'].includes(buffer))
        return true
    return false;
}

function step(tile, buffer){
    if (buffer === 'nw'){
        return [tile[0] + 1, tile[1] - 1]
    }
    else if (buffer === 'ne'){
        return [tile[0] +1, tile[1]]
    }
    else if (buffer === 'e'){
        return [tile[0], tile[1]+1]
    }
    else if (buffer === 'se'){
        return [tile[0] -1, tile[1]+1]
    }
    else if (buffer === 'sw'){
        return [tile[0] -1, tile[1]]
    }
    else if (buffer === 'w'){
        return [tile[0], tile[1] -1]
    }
}

function adjacentsTiles(tile){
    return [
        [tile[0] + 1, tile[1] - 1],
        [tile[0] +1, tile[1]],
        [tile[0], tile[1]+1],
        [tile[0] -1, tile[1]+1],
        [tile[0] -1, tile[1]],
        [tile[0], tile[1] -1]
    ]
}

// number of black tiles (flippedTiles) in tiles selection
function numBlacks(tiles, flippedTiles){
    let count = 0;
    for (let tile of tiles){
        if (flippedTiles.find(t => t[0] === tile[0] && t[1] === tile[1]))[
            count++
        ]
    }
    return count;
}

// white candidates that may be flipped to black
function whiteCandidates(flippedTiles){
    const candidates = [];
    for (let tile of flippedTiles){
        const adjacents = adjacentsTiles(tile);
        for (let adjacent of adjacents){
            if (!flippedTiles.find(t => t[0] === adjacent[0] && t[1] === adjacent[1]))
            {
                candidates.push(adjacent)
            }
        }
    }
    return candidates;
}