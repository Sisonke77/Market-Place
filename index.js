var firebaseConfig = {
   apiKey: "AIzaSyBmJqjAXztETX4Dh4vEetlB4QzN9uqReYA",
   authDomain: "witsmarketproject.firebaseapp.com",
   databaseURL: "https://witsmarketproject-default-rtdb.firebaseio.com",
   projectId: "witsmarketproject",
   storageBucket: "witsmarketproject.appspot.com",
   messagingSenderId: "650642470600",
   appId: "1:650642470600:web:49fe3a262e6ca122b597fd",
   measurementId: "G-EHXK572PE1"
 };

/**
 * getChange accepts two parameters (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned.
 * @param {number} payable the integer amount (in pennies) payable (to be paid)
 * @param {number} paid the integer amount (in pennies) the person paid
 * @returns {array} change the list of coins we need to dispense to the person
 * @example
 * getChange(215, 300); // returns [50, 20, 10, 5]
 */
function passwordsEqual (password1, password2) {
  return password1 == password2;
};

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
   module.exports = passwordsEqual;  // allows CommonJS/Node.js require()
}
