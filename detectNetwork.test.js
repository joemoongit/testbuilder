/*
 * Tests for detectNetwork.js
 *
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num) {
      return num % 2 === 0;
    };
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num) {
      return num % 2 === 0;
    };

    if (even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

var sequenceGenerator = function(number, endNumber) {
  var numberCount = endNumber - number + 1;
  return Array.from(Array(numberCount).keys()).map(
    function(x) { return String(Number(x) + number); }
  );
};

var mergeArrays = function(array1, array2) {
  array2.forEach(function(num) { array1.push(num); });
  return array1;
};

var cards = [
  {name: 'Diner\'s Club', prefix: ['38', '39'], lengths: [14]},
  {name: 'American Express', prefix: ['34', '37'], lengths: [15]},
  {name: 'Visa', prefix: ['4'], lengths: [13, 16, 19]},
  {name: 'MasterCard', prefix: ['51', '52', '53', '54', '55'], lengths: [16]},
  {
    name: 'Discover',
    prefix: mergeArrays(sequenceGenerator(644, 649), ['6011', '65']),
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
      mergeArrays(
        sequenceGenerator(622126, 622925),
        mergeArrays(
          sequenceGenerator(624, 626),
          sequenceGenerator(6282, 6288)
        )
      ),
    lengths: [16, 17, 18, 19]
  },
  {
    name: 'Switch',
    prefix: ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'],
    lengths: [16, 18, 19]
  }
];

var test = function(card) {
  describe(card.name, function() {
    var should = chai.should();

    var helper = function(prefix, number, card) {
      return it('has a prefix of ' + prefix + ' and a length of ' + number.length, function() {
        detectNetwork(number).should.equal(card);
      });
    };

    var generateNumber = function(prefix, length) {
      var res = prefix;
      if (res.length !== length) {
        var numDigits = Math.pow(10, length - res.length - 1);
        res += String(Math.floor(numDigits + Math.random() * (9 * numDigits)));
      }
      return res;
    };
    var generateTest = function(p, n) {
      return { prefix: p, number: n, card: card.name };
    };

    var tests = [];
    var addTests = function(prefixes, lengths) {
      for (var i = 0; i < prefixes.length; i++) {
        var prefix = prefixes[i];
        for (var j = 0; j < lengths.length; j++) {
          var len = lengths[j];
          tests.push(generateTest(prefix, generateNumber(prefix, len)));
        }
      }
    }(card.prefix, card.lengths);

    tests.forEach(function(test) { helper(test.prefix, test.number, test.card); });
  });
};

cards.forEach(function(card) { return test(card); });
