// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {

  var cards = [
    {name: 'Diner\'s Club', prefix: ['38', '39'], lengths: [14]},
    {name: 'American Express', prefix: ['34', '37'], lengths: [15]},
    {name: 'Visa', prefix: ['4'], lengths: [13, 16, 19]},
    {name: 'MasterCard', prefix: ['51', '52', '53', '54', '55'], lengths: [16]},
    {
      name: 'Discover',
      prefix: ['6011', '644', '645', '646', '647', '648', '649', '65'],
      lengths: [16, 19]
    },
    {
      name: 'Maestro',
      prefix: ['5018', '5020', '5038', '6304'],
      lengths: [12, 13, 14, 15, 16, 17, 18, 19]
    }
  ];

  var res = '';

  cards.forEach(
    function(card) {
      card.prefix.forEach(
        function(pre) {
          if (pre === cardNumber.slice(0, pre.length)) {
            res = card.name;
          }
        }
      );
    }
  );

  return res;
};


