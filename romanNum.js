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

	return addRoman(num, decs, roms);

	function addRoman(num, decs, roms) {
		// Sort num into decs array
		let arr = decs.concat([num]).sort( (a, b) => a - b );
		
		// Determine num's order of magnitude
		let div;
		// Take care of case where num exactly equal to one of the orders of magnitude
		if( num === arr[ arr.indexOf(num) + 1 ] ) {
			div = num;
		} else {
			div = arr[ arr.indexOf(num) - 1 ];
		}
		
		// Determine repetitions of largest order of magnitude
		let rep = Math.floor( num / div );
		
		// Create string with repeating Roman numerals
		let str = roms[ decs.indexOf(div) ].repeat(rep);

		// If num is not evenly divisible by divisor, iterate recursively over remainder
		if( num % div !== 0 ) {
			str += addRoman((num - div * rep), decs, roms);
		}

		return str;
	}
}

console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log("29 is " + convertToRoman(29));
console.log("44 is " + convertToRoman(44));
console.log("68 is " + convertToRoman(68));
console.log("400 is " + convertToRoman(400));