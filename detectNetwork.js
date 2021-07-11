// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  var length = cardNumber.length;
  var prefix = cardNumber[0];
  var prefix2 = cardNumber[1];
  if (length === 13) {
    if (prefix === '4') {
      return 'Visa';
    }
  } else if (length === 14) {
    if (prefix === '3' && (prefix2 === '8' || prefix2 === '9')) {
      return 'Diner\'s Club';
    }
  } else if (length === 15) {
    if (prefix === '3' && (prefix2 === '4' || prefix2 === '7')) {
      return 'American Express';
    }
  } else if (length === 16) {
    if (prefix === '4') {
      return 'Visa';
    } else if (prefix === '5' && (['1', '2', '3', '4', '5'].includes(prefix2))) {
      return 'MasterCard';
    }
  } else if (length === 19) {
    if (prefix === '4') {
      return 'Visa';
    }
  }

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


