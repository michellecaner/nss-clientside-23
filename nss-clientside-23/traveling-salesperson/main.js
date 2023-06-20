// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [ 100, 85, 350, 195, 69 ]

// Declare a variable to store the total. Initial value is 0.
let milesTotal = 0

/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (const mile of weeklyMiles) {
  milesTotal += mile
}

// Declare a new variable to store the average miles over time
const averageMiles = milesTotal / weeklyMiles.length


// Output the average miles and the total miles to the console
console.log(`I have driven an average of ${averageMiles} miles this month and a total of ${milesTotal} miles. Go, speedracer!`)