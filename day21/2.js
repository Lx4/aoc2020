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

let swapped = true;
while (swapped === true) { // on itere through the list tant qu'on reduit
    swapped = false;
    for (let allergen of ALLERGENS){
        if (allergen.ingredients.length === 1) {
            swapped = true;
            allergen.found = allergen.ingredients[0];
            ALLERGENS.forEach(a => a.ingredients = a.ingredients.filter(name => name != allergen.found))
        }
    }
}

ALLERGENS.sort((a, b) => 
    a.name < b.name ? -1 : 1
)

for (let allergen of ALLERGENS){
    process.stdout.write(allergen.found+',')
}


console.log('ALLERGENS REDUCED'.bgBlue);
console.log(ALLERGENS)

console.log('INGREDIENTS'.bgGreen);
console.log(INGREDIENTS)


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