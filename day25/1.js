
function calculateKey(subjectNumber=7, loopSize){
    let value = 1
    while (loopSize > 0){
        value = (value * subjectNumber) % 20201227
        loopSize--;
    }
    return value;
}

function findLoopSize(publicKey){
    let i = 1;
    while (1){
        console.log(i)
        if (calculateKey(7, i) === publicKey)
            return i;
        i++;
    }
}


console.log(findLoopSize(16616892))

//console.log(calculateKey(17807724, 8))