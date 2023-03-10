/*
 * Tests for detectNetwork.js
 *
 */

var generateNumber = function(prefix, length) {
  var res = prefix;
  if (res.length !== length) {
    var numDigits = Math.pow(10, length - res.length - 1);
    res += String(Math.floor(numDigits + Math.random() * (9 * numDigits)));
  }
  return res;
};

var test = function(card) {
  var tests = [];

  var helper = function(prefix, number, card) {
    return it('has a prefix of ' + prefix + ' and a length of ' + number.length, function() {
      detectNetwork(number).should.equal(card);
    });
  };

  var generateTest = function(p, n) {
    return { prefix: p, number: n, card: card.name };
  };

  var addTests = function(prefixes, lengths) {
    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      for (var j = 0; j < lengths.length; j++) {
        var len = lengths[j];
        tests.push(generateTest(prefix, generateNumber(prefix, len)));
      }
    }
  };

  describe(card.name, function() {
    var should = chai.should();

    addTests(card.prefix, card.lengths);

    tests.forEach(function(test) { helper(test.prefix, test.number, test.card); });
  });
};

cards.forEach(function(card) { return test(card); });
