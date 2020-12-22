const {player1 : deck1, player2 : deck2} = require('./input')

console.log(deck1);
console.log(deck2)

// let s code this in immutable way instead of push pop etc..

function play(deck1, deck2){
    while (deck1.length && deck2.length){
        [deck1, deck2] = playTurn(deck1, deck2)
    }
    console.log('== Post-game results ==');
    console.log('Player 1 deck: ' + deck1);
    console.log('Player 2 deck: ' + deck2);

    let score = 0;
    if (deck1.length) // player 1 wins
    {
        score = calculateScore(deck1)
    }
    else // player 2 wins
    {
        score = calculateScore(deck2)
    }
    console.log(score)
}

function calculateScore(deck){
    const reverseDeck = [...deck].reverse();
    console.log(reverseDeck)
    return reverseDeck.reduce((acc, val, i) => acc + (val * (i + 1)))
}

function playTurn(deck1, deck2){
    const firstCardDeck1 = deck1[0];
    const firstCardDeck2 = deck2[0];
    deck1 = deck1.slice(1)
    deck2 = deck2.slice(1)
    if (firstCardDeck1 > firstCardDeck2){
        deck1 = [...deck1, firstCardDeck1, firstCardDeck2]
    }
    else{
        deck2 = [...deck2, firstCardDeck2, firstCardDeck1]
    }
    return [deck1, deck2]
}

play(deck1, deck2)