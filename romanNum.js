function convertToRoman(num) {
	// Define Roman Numeral Characters
	const roms = {
		'0':    '',
		'1':    'I',
		'5':    'V',
		'10':   'X',
		'50':   'L',
		'100':  'C',
		'500':  'D',
		'1000': 'M'
	}

	// Split number into array of its digits
	let arr = num.toString().split("").map( el => parseInt(el, 10) );
	
	// Convert each digit to corresponding Roman Numeral character
	let arr2 = arr.map( function(dig, index, arr) {
		// Determine order of magnitude of digit
		let mag = arr.length - index - 1;
		
		// Calculate integer quotient and remainder of digit divided by 5
		let numFive = Math.floor( dig / 5 );
		let rmdr = dig % 5;

		// Get lookup numbers for corresponding Roman Numeral characters
		let powTen = Math.pow(10, mag);

		let str;
		// Handle case where remainder is 4
		if( rmdr === 4 ) {
			str = roms[ powTen.toString() ] + roms[ (powTen * (numFive + 1) * 5).toString() ];
		} else {
			str = roms[ (powTen * numFive * 5).toString() ] + roms[ powTen.toString() ].repeat(rmdr);
		}
		return str;
	});
	
	return arr2.join("");
}

console.log(convertToRoman(44));
