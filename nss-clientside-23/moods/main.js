const wines = [ "red", "white", "white", "white", "red", "white", "red" ]
const wineCellar = []
const wineRefrigerator = []

for (const wine of wines) {
	if (wine === "red") {
		wineCellar.push(wine)
	}
	else {
		wineRefrigerator.push(wine)
	}
}

console.log(`
Contents of wine cellar: ${wineCellar}
Contents of wine refrigerator: ${wineRefrigerator}
`)




const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
const grumpyHours = []
const happyHours = []

for (const hour in hours) {
  if (hour <= 6) {
    grumpyHours.push(hour)
  }
  else if (hour >= 7) {
    happyHours.push(hour)
  }
}

console.log(`I had ${grumpyHours.length} grumpy days and ${happyHours.length} happy days because I'm a human!`)