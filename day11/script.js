const dataset = require('./dataset')

// we insert empty seats all around to avoid out of bounds when checking adjacent seats
const initialArray = dataset.map(line => ("."+line+".").split(''))
const emptyRow = new Array(initialArray[0].length + 1).join('.').split('')
initialArray.unshift(emptyRow);
initialArray.push(emptyRow);

// we now should track the right index 
// row startIndex : 1, endIndex : row.length - 2
// col startIndex : 1, endIndex: col.length - 2


//console.log(initialArray);

// we should not mutate the initial array when changing seats to avoid side effects
let initialState = initialArray;
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
    return [initialState[x-1][y-1],
        initialState[x-1][y],
        initialState[x-1][y+1],
        initialState[x][y-1],
        initialState[x][y+1],
        initialState[x+1][y-1],
        initialState[x+1][y],
        initialState[x+1][y+1]];
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
    if (numOccupied(adjacentArray(x, y, initialState)) >= 4) {
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