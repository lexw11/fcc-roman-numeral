// Roman Numeral Converter

// Converts a positive, non-zero integer into its Roman Numeral equivalent

// =====================
// Query HTML objects
// =====================
let input 	 = document.querySelector( 'input' ),
	button   = document.querySelector( 'button' ),
	result   = document.querySelector( '#result' ),
	error	 = document.querySelector( '#error' );

// =====================
// Add event listeners
// =====================
button.addEventListener( 'click', function() {
	checkForRoman( input );
});

input.addEventListener( 'keypress', function(event) {
	if( event.key === 'Enter' ) {
		checkForRoman( this );
	}
});

// =====================
// Functions
// =====================
// Calls convertToRoman if number is positive integer
function checkForRoman( input ) {
	// Convert input value from string to number
	let num = Number(input.value);

	// Make sure input is a positive integer
	if( Number.isInteger( num ) && num > 0 ) {
		// Call convertToRoman
		result.textContent = convertToRoman( num );
		// Clear previous error message
		error.textContent = "";

	} else {
		// Show error message
		error.textContent = "Please enter a positive, non-zero integer.";
		// Clear previous result message
		result.textContent = "";
	}
}

// Takes positive integer input and converts to Roman Numeral
function convertToRoman( num ) {
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
	let arrDig = num.toString().split("").map( el => parseInt(el, 10) );
	
	// Convert each digit to corresponding Roman Numeral character
	let arrRom = arrDig.map( function(dig, index, arr) {
		// Determine order of magnitude of digit
		let mag = arrDig.length - index - 1;
		
		// Calculate integer quotient and remainder of digit divided by 5
		let numFive = Math.floor( dig / 5 );
		let rmdr = dig % 5;

		// Get lookup numbers for corresponding Roman Numeral characters
		let powTen = Math.pow(10, mag);

		let str;
		// Handle case where remainder is 4
		if( rmdr === 4 ) {
			// Append current powTen character to next larger order of mag character
			str = romChar(powTen) + romChar(powTen * (numFive + 1) * 5);
		} else {
			// Append current order of mag character to powTen characters
			str = romChar(powTen * numFive * 5) + romChar(powTen).repeat(rmdr);
		}
		return str;
	});
	
	return arrRom.join("");

	// Converts order of magnitude number to equivalent Roman Numeral character
	function romChar(num) {
		return roms[ num.toString() ];
	}
}
