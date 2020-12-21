const colors = require('colors')
const data = require('fs').readFileSync('./input.txt', { encoding: "utf-8" }).trim();
const lines = data.split('\n')


// data structure
// allergen : {name: String, possibleIngredients:[]}
// if possibleIngredients.length === 1 , found
// loop through ingredients while we found at least a new pair ingredient <> allergen

// INIT allergens and associated ingredients

const ALLERGENS = []; // array of objects {name: String, ingredients: []}
const INGREDIENTS = []; // All possible ingredients

const regex = /(.*) \(contains ([a-z]+(, [a-z]+)*)\)/
console.log('PART 1'.bgCyan.black)
for (let line of lines) {
    const match = line.match(regex)

    console.log('-- Ingredients --'.blue)
    const ingredients = match[1].split(' ');
    console.log(ingredients)
    for (ingredient of ingredients) {
        INGREDIENTS.push(ingredient)
    }

    console.log('- Allergens -')
    const allergens = match[2].split(', ');
    console.log(allergens)

    for (let name of allergens){
        handleAllergen(name, ingredients)
    }
}

console.log('ALLERGENS'.bgBlue);
console.log(ALLERGENS)

const possibleAllergens = new Set();
for (let allergen of ALLERGENS){
    for (let ingredient of allergen.ingredients) {
        possibleAllergens.add(ingredient)
    }
}
console.log(possibleAllergens)

console.log('INGREDIENTS'.bgGreen);
console.log(INGREDIENTS)

let count = 0
for (let ingredient of INGREDIENTS){
    if (!possibleAllergens.has(ingredient)){
        count++
    }
}
console.log(count)

function handleAllergen(name, ingredients){
    // if allergen is new, add it to the list of allergens with possible ingredients
    if (!ALLERGENS.find(a => a.name === name)){
        const newAllergen = {}
        newAllergen.name = name;
        newAllergen.ingredients = ingredients
        ALLERGENS.push(newAllergen)
    }
    // else check the common ingredients between those in arguments and the ones already in allergen possible ingredients
    else {
        const allergen = ALLERGENS.find(a => a.name === name);
        const common = commonIngredients(name, ingredients);
        allergen.ingredients = common;
        if (common.length === 1){ // found association allergen/ingredients, remove from others allergens
            const otherAllergens = ALLERGENS.filter((a) => a.name !== name);
            // remove from otherAllergens every common[0] appearances 
            // can CASCADE so we need to loop at some point, should do that at the end maybe
            // TODO
        }
    }
}

// return an array of common ingredients between name allergen ingredients and ingredients parameter
function commonIngredients(name, ingredients) {
    const allergen = ALLERGENS.find(a => a.name === name);
    return allergen.ingredients.filter((ingredient) => ingredients.includes(ingredient))
}