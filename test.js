if (typeof module !== 'undefined' && module.exports) { // check we're server-side
  var QUnit = require('qunitjs'); // require QUnit node.js module
  // alias the QUnit.test method so we don't have to change all our tests
  var test = QUnit.test; // stores a copy of QUnit.test
  require('qunit-tap')(QUnit, console.log); // use console.log for test output
  var passwordsEqual = require('./change.js'); // load our passwordsEqual method
  var successfulLogin = require('./index.js');
}

// Login user story
test('passwordsEqual(12, 12) should return true', function(assert) {
  var result = successfulLogin(12, 12);
  var expected = true;
  assert.deepEqual(result, true);
});

// test('passwordsEqual(12, 4) should return false', function(assert) {
//   var result = successfulLogin(12, 4);
//   var expected = false;
//   assert.deepEqual(result, expected);
// });

//passwords matching
 test('passwordsEqual(12, 12) should return true', function(assert) {
  var result = passwordsEqual(12, 12);
  var expected = true;
  assert.deepEqual(result, expected);
});

test('passwordsEqual(12, 4) should return false', function(assert) {
  var result = passwordsEqual(12, 4);
  var expected = false;
  assert.deepEqual(result, expected);
});

if (typeof module !== 'undefined' && module.exports) { QUnit.load(); } // run the tests
