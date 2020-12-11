const dataset = require('./dataset')

// we insert empty seats all around to avoid out of bounds when checking adjacent seats
const initialState = dataset.map(line => line.split(''))

// we should not mutate the initial array when changing seats to avoid side effects
let computedState = JSON.parse(JSON.stringify(initialState));

// initialState not mutated, computedState is
function handlePosition(initialState, computedState, x, y) {
    const position = initialState[x][y];
    if (position === "L") {
      handleFreeSeat(x, y, initialState, computedState);
    }
    else if (position === '#'){
      handleOccupiedSeat(x, y, initialState, computedState);
    }
}

function handleFreeSeat(x, y, initialState, computedState) {
    if (adjacentArray(x, y, initialState).includes('#'))
        {
            computedState[x][y] = "L"
        }
        // else all adjacent seats are free, swap to occupied
    else {
        computedState[x][y] = "#"
        //console.log(computedState[x][y])
    }
}

// return an array of adjacents cases
function adjacentArray(x, y, initialState) {
    const arr = []
    for (let row = 0; row < initialState.length; row++ ){
        for (let col = 0; col < initialState[0].length; col++) {
            if (starMember(x, y, row, col)) {
                arr.push(initialState[row][col])
            }
        }
    }
    return arr;
}

// check if coords are part of the star (and not element itself)
function starMember(x, y, row, col){
    const deltaX = row - x;
    const deltaY = col - y;
    if (deltaX === 0 && deltaY === 0)
        return false; // same coords
    if (deltaX === 0 || deltaY === 0)
        return true; // same row or same column
    if (Math.abs(deltaX) === Math.abs(deltaY))
        return true; // crossssssed
    return false;
}

// number of # in an array
function numOccupied(array) {
    return array.reduce((acc, v) => {
        if (v === '#')
            return acc + 1
        else
            return acc
    }, 0)
}


function handleOccupiedSeat(x, y, initialState, computedState) {
    if (numOccupied(adjacentArray(x, y, initialState)) >= 5) {
        //console.log("modified occupied")
        computedState[x][y] = "L"
    }
    else computedState[x][y] = "#"
}

function step(initialState, computedState){
    let go = false;
    for (let i = 1; i < initialState.length - 1; i++) { // row
        for (let j = 1; j < initialState[0].length - 1; j++) { // column
            handlePosition(initialState, computedState, i, j);
            if (initialState[i][j] !== computedState[i][j])
            {
                go = true;
            }      
        }
    }
    return go;
}

function iterateAndCalculate(initialState, computedState){
    while (step(initialState, computedState)) {
        console.log("step")
        initialState = JSON.parse(JSON.stringify(computedState))
    }
    const computedRows = computedState.map((line) => numOccupied(line))
    console.log(computedRows.reduce((acc, val) => acc + val))
}


// TESTS
// numOccupied test
//console.log('numOccupied should return 3 : ' + numOccupied(['#', '#', 'L', '.', '#']))
iterateAndCalculate(initialState, computedState)