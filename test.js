if (typeof module !== 'undefined' && module.exports) { // check we're server-side
  var QUnit = require('qunitjs'); // require QUnit node.js module
  var test = QUnit.test; // stores a copy of QUnit.test
  require('qunit-tap')(QUnit, console.log); // use console.log for test output
  var methods = require('./public/index.js');
  var register = methods.register;
  var login = methods.login;
  var genrateRandomEmail = methods.genrateRandomEmail;
}

//sprint 1 
//Registration 
//Acceptance criteria (1): 

// If there exist an input field that is left empty, 
// I will get an error message and I will remain in the registration page.

//first password is not given but all other inputs are valid
QUnit.test( 'register("first name","last name","17-22-2000","shlomo@brill.com","","123456") should return "Enter both password"', assert => {
  return register("abc","xyz","17-22-2000","shlomo@brill.com","","123456").then( result => {
    assert.equal( result, "Enter both passwords");
  });
});

//second password is not given but all other inputs are valid
QUnit.test( 'register("first name","last name","17-22-2000","shlomo@brill.com","123456","") should return "Enter both password"', assert => {
  return register("abc","xyz","17-22-2000","shlomo@brill.com","123456","").then( result => {
    assert.equal( result, "Enter both passwords");
  });
});

//all valid details are given but passwords do not match
QUnit.test( 'register("first name","last name","17-22-2000","shlomo@brill.com","123456","123455") should return "Passwords do not match. Please try again."', assert => {
  return register("first name","last name","17-22-2000","shlomo@brill.com","123456","123455").then( result => {
    assert.equal( result, "Passwords do not match. Please try again.");
  });
});

//first name is not given but all other inputs are valid
QUnit.test( 'register("","last name","17-22-2000","shlomo@brill.com","123456","123456") should return "Ensure all fields are filled"', assert => {
  return register("","last name","17-22-2000","shlomo@brill.com","123456","123456").then( result => {
    assert.equal( result, "Ensure all fields are filled");
  });
});

//last name is not given but all other inputs are valid
QUnit.test( 'register("first name","","17-22-2000","shlomo@brill.com","123456","123456") should return "Ensure all fields are filled"', assert => {
  return register("first name","","17-22-2000","shlomo@brill.com","123456","123456").then( result => {
    assert.equal( result, "Ensure all fields are filled");
  });
});

//date is not given but all other inputs are valid
QUnit.test( 'register("first name","last name","","shlomo@brill.com","123456","123456") should return "Ensure all fields are filled"', assert => {
  return register("first name","last name","","shlomo@brill.com","123456","123456").then( result => {
    assert.equal( result, "Ensure all fields are filled");
  });
});

//email is not given but all other inputs are valid
QUnit.test( 'register("first name","last name","17-22-2000","","123456","123456") should return "Ensure all fields are filled"', assert => {
  return register("first name","last name","17-22-2000","","123456","123456").then( result => {
    assert.equal( result, "Ensure all fields are filled");
  });
});

//password length is less than 6 but all other inputs are valid
QUnit.test( 'register("first name","last name","17-22-2000","shlomo@brill.com","12345","12345") should return "Password should be at least 6 characters"', assert => {
  return register("first name","last name","17-22-2000","shlomo@brill.com","12345","12345").then( result => {
    assert.equal( result, "Password should be at least 6 characters");
  });
});

//invalid email but all other inputs are valid
QUnit.test( 'register("first name","last name","17-22-2000","shlomogmail.co.za","123456","123456") should return "The email address is badly formatted."', assert => {
  return register("first name","last name","17-22-2000","shlomogmail.co.za","123456","123456").then( result => {
    assert.equal( result, "The email address is badly formatted.");
  });
});

//invalid email but all other inputs are valid
QUnit.test( 'register("first name","last name","17-22-2000","shlomogmail.co.za","123456","123456") should return "The email address is badly formatted."', assert => {
  return register("first name","last name","17-22-2000","shlomogmail.co.za","123456","123456").then( result => {
    assert.equal( result, "The email address is badly formatted.");
  });
});

//Registration - all correct details done at the botom of the pgae



//Login user story 
// login - valid password given and email not given 
QUnit.test( 'login("", "123456") should return The email address is badly formatted.', assert => {
  return login("", "123456").then( result => {
    assert.equal( result, "The email address is badly formatted.");
  });
});

// login - valid email and password given
QUnit.test( 'login("shlomo@brill.com", "123456") should return success', assert => {
  return login("shlomo@brill.com", "123456").then( result => {
    assert.equal( result, "success");
  });
});

//Registration acceptance criteria 
//missing first name
// test('register("","1","1","1","1","1") should return "Please ensure all fields are filled"', function(assert){
//   var result = register("","1","1","1","1","1"); 
//   var expected = "Please ensure all fields are filled";
//   assert.deepEqual(result, expected); 
// });

// //missing last name
// test('register("1","","1","1","1","1")  should return "Please ensure all fields are filled"', function(assert){
//   var result = register("1","","1","1","1","1"); 
//   var expected = "Please ensure all fields are filled";
//   assert.deepEqual(result, expected); 
// });

// //missing date of birth
// test('register("1","1","","1","1","1")  should return "Please ensure all fields are filled"', function(assert){
//   var result = register("1","1","","1","1","1"); 
//   var expected = "Please ensure all fields are filled";
//   assert.deepEqual(result, expected); 
// });

// //missing email
// test('register("1","1","1","","1","1") should return "Please ensure all fields are filled"', function(assert){
//   var result = register("1","1","1","","1","1"); 
//   var expected = "Please ensure all fields are filled";
//   assert.deepEqual(result, expected); 
// });

// //missing password
// test('register("1","1","1","1","","1")  should return "Please ensure all fields are filled"', function(assert){
//   var result = register("1","1","1","1","","1"); 
//   var expected = "Please ensure all fields are filled";
//   assert.deepEqual(result, expected); 
// });

// //missing confirmed password
// test('register("1","1","1","1","1","")  should return "Please ensure all fields are filled"', function(assert){
//   var result = register("1","1","1","1","1",""); 
//   var expected = "Please ensure all fields are filled";
//   assert.deepEqual(result, expected); 
// });

// //passwords given but do not match
// test('register("1","1","1","1","114543","128787")  should return "Passwords do not match"', function(assert){
//   var result = register("1","1","1","1","114543","128787"); 
//   var expected = "Passwords do not match";
//   assert.deepEqual(result, expected); 
// });

// //all details given but email address is already on the system
// test('register("1","1","1","fdsft43s@g987l.com","123456","123456")  should return ""', function(assert){
//   var result = register("1","1","1","fdsft43s@jhggl.com","123456","123456"); 
//   var expected = "";
//   assert.deepEqual(result, expected); 
// });


// //Login acceptance criteria

// //email missing, password given
// test('login("", "123456") should return "Please ensure all fields are filled"', function(assert){
//   var result = login("", "123456");
//   var expected = "Please ensure all fields are filled";
//   assert.deepEqual(result, expected);
// });

// //email given, passwrod missing
// test('login("x", "") should return "Please ensure all fields are filled"', function(assert){
//   var result = login("x", "");
//   var expected = "Please ensure all fields are filled";
//   assert.deepEqual(result, expected);
// });

// //email and password missing
// test('login("", "") should return "Please ensure all fields are filled"', function(assert){
//   var result = login("", "");
//   var expected = "Please ensure all fields are filled";
//   assert.deepEqual(result, expected);
// });

// //test incorrect email format with @ but with out dot after @
// test('login("sds@", "123456") should return "logged"', function(assert){
//   var result = login("sds@", "123456");
//   var expected = "logged";
//   assert.deepEqual(result, expected);
// });
// //test incorrect email format without @
// test('login("sdsksdjh.gmail.com", "123456") should return "logged"', function(assert){
//   var result = login("sdsksdjh.gmail.com", "123456");
//   var expected = "logged";
//   assert.deepEqual(result, expected);
// });

// //test valid input that DNE in the DB
// test('login("sds@ksdjh.gmail.com", "123456") should return "logged"', function(assert){
//   var result = login("sds@ksdjh.gmail.com", "123456");
//   var expected = "logged";
//   assert.deepEqual(result, expected);
// });

// //test valid and existing login
// test('login("shlomdf@gmail.com", "123456") should return "logged"', function(assert){
//   var result = login("shlom0923@gmail.com", "123456");
//   var expected = "logged";
//   assert.deepEqual(result, expected);
// });



//testing randomEmailGenerator function 
QUnit.test( 'generateRandomEmail(5) testing ', assert => {
    result = genrateRandomEmail(5).length;
    assert.equal( result, 15);

});

//generate random first name and last name for new email testing
randEmail = genrateRandomEmail(5);
//All details are valid but email is already in use
QUnit.test( 'register("first name","last name","17-22-2000","'+randEmail+'","123456","123456") should return "Success"', assert => {
  return register("first name","last name","17-22-2000",randEmail,"123456","123456").then( result => {
    assert.equal( result, "Success");
  });
});


if (typeof module !== 'undefined' && module.exports) { QUnit.load(); } // run the tests
