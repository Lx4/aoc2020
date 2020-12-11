const dataset = require('./dataset')

// we insert empty seats all around to avoid out of bounds when checking adjacent seats
const initialState = dataset.map(line => line.split(''))

const ROW_LENGTH = initialState[0].length;
const LENGTH = initialState.length;

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
    if (occupiedSeats(x, y, initialState) != 0)
        {
            computedState[x][y] = "L"
        }
        // else all adjacent seats are free, swap to occupied
    else {
        computedState[x][y] = "#"
    }
}



// check if coords are part of the star (and not element itself)
// function starMember(x, y, row, col){
//     const deltaX = row - x;
//     const deltaY = col - y;
//     if (deltaX === 0 && deltaY === 0)
//         return false; // same coords
//     if (deltaX === 0 || deltaY === 0)
//         return true; // same row or same column
//     if (Math.abs(deltaX) === Math.abs(deltaY))
//         return true; // crossssssed
//     return false;
// }

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
    if (occupiedSeats(x, y, initialState) >= 5) {
        computedState[x][y] = "L"
    }
    else computedState[x][y] = "#"
}

function step(initialState, computedState){
    let go = false;
    for (let i = 0; i < LENGTH; i++) { // row
        for (let j = 0; j < ROW_LENGTH; j++) { // column
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
        initialState = JSON.parse(JSON.stringify(computedState))
    }
    const computedRows = computedState.map((line) => numOccupied(line))
    console.log(computedRows.reduce((acc, val) => acc + val))
}


// TESTS
// numOccupied test
//console.log('numOccupied should return 3 : ' + numOccupied(['#', '#', 'L', '.', '#']))
iterateAndCalculate(initialState, computedState)


// return the number of visible occupied seats
function occupiedSeats(x, y, initialState) {
    let occupiedVisible = 0
    // top
    for (let row = x - 1; row >= 0; row--){
        if (initialState[row][y] === '#')
            {
                occupiedVisible++;
                break;
            }
        if (initialState[row][y] === 'L')
        {
            break;
        }
    }
    // topLeft
    for (let col = y - 1, row = x - 1; col >= 0 && row >=0; col--, row--){
        if (initialState[row][col] === '#')
            {
                occupiedVisible++;
                break;
            }
        if (initialState[row][col] === 'L')
        {
            break;
        }
    }
    // topRight
    for (let col = y + 1, row = x - 1; col < ROW_LENGTH && row >=0; col++, row--){
        if (initialState[row][col] === '#')
            {
                occupiedVisible++;
                break;
            }
        if (initialState[row][col] === 'L')
            {
                break;
            }
    }
    // left
    for (let col = y - 1; col >= 0; col--){
        if (initialState[x][col] === '#')
        {
            occupiedVisible++;
            break;
        }
        if (initialState[x][col] === 'L')
        {
            break;
        }
    }
    // right
    for (let col = y + 1; col < ROW_LENGTH; col++){
        if (initialState[x][col] === '#')
        {
            occupiedVisible++;
            break;
        }
        if (initialState[x][col] === 'L')
        {
            break;
        }
    }
    // bottomLeft
    for (let col = y - 1, row = x + 1; col >= 0 && row < LENGTH; col--, row++)
    {
        if (initialState[row][col] === '#')
            {
            occupiedVisible++;
                break;
            }
        if (initialState[row][col] === 'L')
            {
                break;
            }
    }
    // bottomRight
    for (let col = y + 1, row = x + 1; col < ROW_LENGTH && row < LENGTH; col++, row++)
    {
        if (initialState[row][col] === '#')
        {
            occupiedVisible++;
            break;
        }
        if (initialState[row][col] === 'L')
        {
            break;
        }
    }
    // bottom
    for (let row = x + 1; row < LENGTH; row++){
        if (initialState[row][y] === '#')
        {
            occupiedVisible++;
            break;
        }
        if (initialState[row][y] === 'L')
        {
            break;
        }
    }
    return occupiedVisible;
}