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
	// =================================================
	// const roms = {
	// 	1:    'I',
	// 	5:    'V',
	// 	10:   'X',
	// 	50:   'L',
	// 	100:  'C',
	// 	500:  'D',
	// 	1000: 'M'
	// }
	// =================================================

	return addRoman(num, decs, roms);

	function addRoman(num, decs, roms) {
		let str;
		// First check if num is exactly equal to one of the orders of magnitude
		if( decs.includes(num) ) {
			str = roms[ decs.indexOf(num) ];
			return str;
		
		} else {
			// Sort num into decs array
			let arr = decs.concat([num]).sort( (a, b) => a - b );
			let numIndex = arr.indexOf(num);
			
			// Select greatest possible divisor from orders of magnitude array
			let divIndex = numIndex - 1;
			let div = arr[ divIndex ];

			// Check to see if subtractive notation is necessary
			let oneUp = arr[ numIndex + 1 ];
			let gcd = getGcd(num, oneUp);
			// if( (oneUp - num) / gcd === 1 ) {
			// 	// Append Roman numeral for next order of magnitude to string
			// 	str = roms[ decs.indexOf(gcd) ] + roms[ divIndex + 1 ];

			// } else {
				// Calculate quotient
				let quot = Math.floor( num / div );
				// Append repeating Roman numerals to string
				str = roms[ divIndex ].repeat(quot); 

				// Calculate remainder
				let rmdr = num % div;
				// If there's a remainder, apply function recursively to it
				if( rmdr !== 0 ) {
					str += addRoman(rmdr, decs, roms);
				}
			// }				

			return str;
		}
	}

	// Find the greatest common divisor of two numbers
	function getGcd(a, b) {
		let num = Math.min(a, b);
		for( let div = num; div > 0; div-- ) {
			if( a % div === 0 && b % div === 0 ) {
				return div;
			}
		}
	}
}

// console.log(convertToRoman(2));
// console.log(convertToRoman(3));
// console.log(convertToRoman(4));
// console.log(convertToRoman(5));
// console.log(convertToRoman(9));
// console.log(convertToRoman(12));
// console.log(convertToRoman(16));
// console.log("29 is " + convertToRoman(29));
console.log("44 is " + convertToRoman(44));
console.log("45 is " + convertToRoman(45));
console.log("68 is " + convertToRoman(68));
console.log("400 is " + convertToRoman(400));
// console.log(convertToRoman(50));