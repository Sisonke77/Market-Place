
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth.Auth.Persistence.LOCAL;

// window.alert(login("shlomo@gmail.com","123456")); //for testing

function login(email,password){
  if (email != "shlomo@gmail.com" && password != "123456"){
      email = document.getElementById("email").value;
      password = document.getElementById("password").value;
  }  

  var page = window.location.href;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    //window.alert(user.uid);
    window.location.href = "index.html";
  })
  .catch((error) => {
    var errorMessage = error.message;
       window.alert(errorMessage)
  });

  if (window.location.href != page){
    return "Success"; 
  }else{
    return "Fail"
  }
  
}

function register(){
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;
  var dob = document.getElementById("dob").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cPassword = document.getElementById("cPassword").value;

  if(password == cPassword){
    if(fName!= "" && lName != "" && dob != ""){
      firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        // Signed in 
        var user = userCredential.user.uid;
        var rootRef = firebase.database().ref();
        var usersRef = rootRef.child("users").child(user);
        var userData = 
        {
          firstName: fName,
          lastName: lName,
          dateOfBirth: dob,
          email: email
        };
        usersRef.set(userData, function(error){
          if(error){
            var errorCode = error.code;
            var errorMessage = error.message;
  
            window.alert("Message : " + errorMessage);
          }
          else{
            window.location.href = "index.html";
          }
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage)
        // ..
      });
    }
    else{
      window.alert("Please enter all fields!")
    }
    
  }
  else{
    window.alert("Passwords do not match.");
  }
}

function logout(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}

// document.getElementById("i").innerHTML = 23;

// Code Coverage Testing
// if (typeof module !== 'undefined' && module.exports) {
//   module.exports = login;  // Login
// }


/**
 * getChange accepts two parameters (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned.
 * @param {number} payable the integer amount (in pennies) payable (to be paid)
 * @param {number} paid the integer amount (in pennies) the person paid
 * @returns {array} change the list of coins we need to dispense to the person
 * @example
 * getChange(215, 300); // returns [50, 20, 10, 5]
 */
//  function passwordsEqual (password1, password2) {
//   return password1 == password2;
// };

// /* The code block below ONLY Applies to Node.js - This Demonstrates
//    re-useability of JS code in both Back-end and Front-end! #isomorphic */
// /* istanbul ignore next */
// if (typeof module !== 'undefined' && module.exports) {
//    module.exports = passwordsEqual;  // allows CommonJS/Node.js require()
// }

function passwordsEqual (password1, password2) {
  return password1 == password2;
};

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
   module.exports = passwordsEqual;  // allows CommonJS/Node.js require()
}
