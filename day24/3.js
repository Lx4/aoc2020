const LINES = require('./input')

const EZSAMPLE = ['esew']

class ObjectSet extends Set{
    add(elem){
      return super.add(typeof elem === 'object' ? JSON.stringify(elem) : elem);
    }
    has(elem){
      return super.has(typeof elem === 'object' ? JSON.stringify(elem) : elem);
    }
    delete(elem){
      return super.delete(typeof elem === 'object' ? JSON.stringify(elem) : elem);
    }
}

let flippedTiles = new ObjectSet() // array of [x,y] flipped tiles.

// PART 1
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
    if (flippedTiles.has(tile)){
        flippedTiles.delete(tile)
    }
    else
        flippedTiles.add(tile)
}

console.log('Part 1 : '+ flippedTiles.size)
// PART 2
for (let i = 1; i <= 100; i++){
    const newBlackTiles = new ObjectSet()
    for (let black of flippedTiles){
        const b = JSON.parse(black)
        if (numBlacks(adjacentsTiles(b), flippedTiles) === 1 || numBlacks(adjacentsTiles(b), flippedTiles) === 2)
            newBlackTiles.add(black)
    }
    //console.log(flippedTiles)
    let whites = whiteCandidates(flippedTiles);
    for (let white of whites){
        if (numBlacks(adjacentsTiles(white), flippedTiles) === 2)
            newBlackTiles.add(white)
            
    }
    //console.log(newBlackTiles)
    flippedTiles = newBlackTiles;
}
console.log('Part 2 : ' + flippedTiles.size)


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
        if (flippedTiles.has(tile))[
            count++
        ]
    }
    return count;
}

// white candidates that may be flipped to black
function whiteCandidates(flippedTiles){
    const candidates = [];
    for (let tile of flippedTiles){
        const t = JSON.parse(tile)
        const adjacents = adjacentsTiles(t);
        for (let adjacent of adjacents){
            if (!flippedTiles.has(adjacent))
            {
                candidates.push(adjacent)
            }
        }
    }
    return candidates;
}