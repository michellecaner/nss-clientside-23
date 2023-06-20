const dishes = [
  "Dinner plate", "Water glass", "Salad bowl",
  "Dinner plate", "Wine glass", "Spoon",
  "Spoon", "Fork", "Salad bowl", "Whiskey glass",
  "Fork", "Spoon", "Fork"
]

/*
  Declare three variables to store the string value
  of a glass in the array. Use the correct index to
  get the right value.
*/

waterGlass = dishes[1]
wineGlass = dishes[4]
whiskeyGlass = dishes[9]


console.log(`I am cleaning the following glasses: ${waterGlass}, ${wineGlass} and ${whiskeyGlass}.`)

// Put each variable in one of the parenthesis below
console.log(waterGlass)
console.log(wineGlass)
console.log(whiskeyGlass)




const originals = [ "Original paper 1", "Original paper 2", "Original paper 3" ]
const copies = []  // Blank array that will contain the copies

for (const paper of originals) {
	const copy = `Copy of ${paper}`
	copies.push(copy)
}

console.log(copies)