const dataset = require('./dataset')

// PART 1

const sorted = dataset.sort((a, b) => a > b ? 1 : -1)

function jolts(sorted) {
    let diffOne = 0;
    let diffThree = 0;
    let current = 0;
    for (let i = 0; i < sorted.length ; i++) {
        if (sorted[i] - current === 1) {
            diffOne++
        }
        else if (sorted[i] - current === 3)
        {
            diffThree++;
        }
        current = sorted[i];
    }
    diffThree++; // last adapter
    return diffThree * diffOne;
}

//console.log(jolts(sorted))


// function numArrangements(sorted) {
//     if (sorted.length <= 2 )
//         return 0;
//     const current = sorted[0];
//     console.log("sorted is:\n")
//     console.log(sorted)
//     if (sorted.includes(current + 1) && sorted.includes
//         return 1 + numArrangements(sorted.slice(1)) + numArrangements(shiftPlusThree(sorted))
//     else numArrangements(sorted.slice(1))
// }

// function numArrangements(sorted) {
//     if (sorted.length <= 1)
//         return 1;
//     const current = sorted[0];
//     console.log(sorted)
//     if (sorted[1] === current + 3) {
//         return numArrangements(sorted.slice(1))
//     }
//     if (sorted[1] === current + 2 && sorted[2] === current + 3
//      || sorted[1] === current + 1 && sorted[2] === current + 2
//      || sorted[1] === current + 1 && sorted[2] === current + 3
//     ) {
//         return 1 + numArrangements(sorted.slice(2))
//     }
//     else
//         return 2 + numArrangements(sorted.slice(3))
// }

function numArrangements(sorted) {
    const adjList = sorted.map((e) => [e, numConnexions(sorted, e)])
    console.log(adjList)
}



function numConnexions(list, e) {
    let connexions = [];
    for (let i = 1; i <= 3; i++)
    {
        if (list.includes(e + i)) connexions.push(e+i);
    }
    return connexions;
}


console.log(numArrangements(sorted))

 // recursive calls
// 1 2 5 6 7 8
// 1 2 5 8 

// 1 + numArrangements([6, 7, 8]) + numArrangements([8, ...])



