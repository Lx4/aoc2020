const LINES = require('./input')

const EZSAMPLE = ['esew']

const flippedTiles = [] // array of [x,y] flipped tiles.

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

function ajacentsTiles(tile){
    
}