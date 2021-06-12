function passwordsEqual (password1, password2) {
  return password1 == password2;
};

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
   module.exports = passwordsEqual;  // allows CommonJS/Node.js require()
}


