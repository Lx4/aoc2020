const ListNode = require('./ListNode')

let INPUT = "156794823".split('').map(e => +e);
const PICK_SIZE = 3
const CUPS = 1000000

const MAX = Math.max(...INPUT)
//console.log(MAX)

for (let i = MAX + 1; i <= CUPS; i++){
    INPUT.push(i)
}

//console.log(INPUT)


// INIT THE LINKED LIST
let head = null; // reference to first node of the list
let current = null; // reference to the current element in the list

const BIGARR = []

for (let i = 0; i < INPUT.length; i++){
    const node = new ListNode(+INPUT[i]);
    BIGARR[+INPUT[i]] = node;
    if (i === 0){
        head = node;
        current = node;
    }
    else {
        current.next = node;
        current = current.next;
    }
}
current.next = head;
//const tail = current;
current = head;

//console.log(head)


const NUM_MOVES = 10000000
for (let i = 1; i <= NUM_MOVES; i++){
    //console.log("loop")
    //if (i % 1000 === 0) console.log('-- move '+ i +' --')
    const picks = pickCups(current);
    let destinationCup = getDestination(current, picks)
    let temp = destinationCup.next;
    destinationCup.next = picks;
    destinationCup.next.next.next.next = temp;
    current = current.next;
}


while (current.label !== 1){
    current = current.next
}

//console.log(current)
console.log(current.next.label)
console.log(current.next.next.label)
console.log(current.next.label * current.next.next.label)

// functions to play the game
// extract a pick list with size PICK_SIZE and link the current one so its stayed linked
function pickCups(current) {
    const pick = current.next;
    current.next = current.next.next.next.next; 
    pick.next.next.next  = null
    return pick;
}

// search through current list for the destination cup and return a reference to it
function getDestination(current, pickList){
    const currentLabel = current.label;
    let destinationLabel = currentLabel-1;
    // check if the destination would be part of the pick list
    while (memberOf(destinationLabel, pickList)){
        destinationLabel--
    }
    if (destinationLabel === 0){
        return getHighest(current, pickList)
    }
    else {
       return BIGARR[destinationLabel]
    }
}

// check if label is a member of the list and return a reference to it
function memberOf(label, list){
    let pointer = list
    while(pointer){
        if (pointer.label === label) return pointer;
        pointer = pointer.next
    }
    return null;
}

// return a reference to the highest value in a linked list
function getHighest(current, pickList) {
    let highest = CUPS;
    while (memberOf(highest, pickList)){
        highest--
    }
    //console.log(highest)
    let pointer = current;
    while(pointer.label !== highest){
        pointer = pointer.next;
    }
    return pointer;
}
