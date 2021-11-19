// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!
var sequenceGenerator = function(number, endNumber) {
  var numberCount = endNumber - number + 1;
  return Array.from(Array(numberCount).keys()).map(
    function(x) { return String(Number(x) + number); }
  );
};

var cards = [
  {name: 'Diner\'s Club', prefix: ['38', '39'], lengths: [14]},
  {name: 'American Express', prefix: ['34', '37'], lengths: [15]},
  {name: 'Visa', prefix: ['4'], lengths: [13, 16, 19]},
  {name: 'MasterCard', prefix: ['51', '52', '53', '54', '55'], lengths: [16]},
  {
    name: 'Discover',
    prefix: sequenceGenerator(644, 649).concat(['6011', '65']),
    lengths: [16, 19]
  },
  {
    name: 'Maestro',
    prefix: ['5018', '5020', '5038', '6304'],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19]
  },
  {
    name: 'China UnionPay',
    prefix:
      sequenceGenerator(622126, 622925)
        .concat(sequenceGenerator(624, 626))
        .concat(sequenceGenerator(6282, 6288)),
    lengths: [16, 17, 18, 19]
  },
  {
    name: 'Switch',
    prefix: ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'],
    lengths: [16, 18, 19]
  }
];

var detectNetwork = function(cardNumber) {
  var lastPrefix = '';
  var name = '';

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    for (var j = 0; j < card.prefix.length; j++) {
      var pre = card.prefix[j];
      if ((pre === cardNumber.slice(0, pre.length)) && card.lengths.includes(cardNumber.length)) {
        if (lastPrefix.length > 1 && pre.length > lastPrefix.length) {
          lastPrefix = pre;
          name = card.name;
        } else {
          lastPrefix = pre;
          name = card.name;
        }
      }
    }
  }

  return name;
};
