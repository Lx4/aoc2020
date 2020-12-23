const ListNode = require('./ListNode')

let INPUT = "389125467".split('').map(e => +e);
const PICK_SIZE = 3

const MAX = Math.max(...INPUT)
console.log(MAX)

for (let i = MAX + 1; i <= 1000000; i++){
    INPUT.push(i)
}

console.log(INPUT)


// INIT THE LINKED LIST
let head = null; // reference to first node of the list
let current = null; // reference to the current element in the list

for (let i = 0; i < INPUT.length; i++){
    const node = new ListNode(+INPUT[i]);
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
current = head;

//console.log(head)

const NUM_MOVES = 10000000
for (let i = 1; i <= NUM_MOVES; i++){
    //console.log("loop")
    //console.log('-- move '+ i +' --')
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
displayList(current)

function displayList(list) {
    for (let i = 0; i < INPUT.length; i++){
        process.stdout.write(''+list.label);
        list = list.next;
    }
    console.log('')
}

// functions to play the game
// extract a pick list with size PICK_SIZE and link the current one so its stayed linked
function pickCups(current) {
    const pick = current.next;
    current.next = current.next.next.next.next; // foireux si on rajoute pas les elements a current
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
        return memberOf(destinationLabel, current)
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
function getHighest(current) {
    let list = current.next;
    const values = new Set()
    while (!values.has(list.label)){
        values.add(list.label)
        list = list.next
    }
    console.log(values)

    //console.log(values)
    const highest = Math.max(...values);
    //console.log('GETTING HIGHEST')
    //console.log(highest)
    let pointer = list;
    while(pointer.label !== highest){
        pointer = pointer.next;
    }
    return pointer;
}


// HELPERS
function forward(list, n) {
    let pointer = list.next;
    while (n > 0){
        pointer = pointer.next;
        n--
    }
    return pointer;
}