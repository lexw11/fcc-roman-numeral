// Define array of 7 divisors [1, 5, 10, 50, 100, 500, 1000]
// Check magnitude of number to determine starting divisor (starting with largest divisor)
// Count quantity of largest divisor
// Check if number has any remainders
// Iterate recursively to smaller orders of magnitude
// Add subtractive notation

function convertToRoman(num) {
	// Define order of magnitude arrays
	const decs = [ 1, 5, 10, 50, 100, 500, 1000];
	const roms = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

	// Sort num into decs array
	let arr = decs.concat([num]).sort( (a, b) => a - b );
	// Determine num's order of magnitude
	let div = arr[ arr.indexOf(num) - 1 ];
	
	// Determine repetitions of largest order of magnitude
	let rep = Math.floor( num / div );
	// Create string with repeating Roman numerals
	let str = roms[ decs.indexOf(div) ].repeat(rep);
	console.log(str);
}

convertToRoman(36);