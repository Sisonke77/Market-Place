if (typeof module !== 'undefined' && module.exports) { // check we're server-side
  var QUnit = require('qunitjs'); // require QUnit node.js module
  // alias the QUnit.test method so we don't have to change all our tests
  var test = QUnit.test; // stores a copy of QUnit.test
  require('qunit-tap')(QUnit, console.log); // use console.log for test output
  // var passwordsEqual = require('./public/index.js'); // load our passwordsEqual method   
  // var register = require('./public/index.js'); // load our register method   
  var methods = require('./public/index.js');
  var register = methods.register;
  var login = methods.login;
  var removeProduct = methods.removeProduct;
  var checkoutDelevery = methods.checkoutDelevery;
  var logout = methods.logout;
  var getCategoryAndProductId = methods.getCategoryAndProductId;
  var checkoutOpen = methods.checkoutOpen;
  // var updateQuantity = methods.updateQuantity;
}

//sprint 1 

//Registration acceptance criteria 

//missing first name
test('register("","1","1","1","1","1") should return "Please ensure all fields are filled"', function(assert){
  var result = register("","1","1","1","1","1"); 
  var expected = "Please ensure all fields are filled";
  assert.deepEqual(result, expected); 
});

//missing last name
test('register("1","","1","1","1","1")  should return "Please ensure all fields are filled"', function(assert){
  var result = register("1","","1","1","1","1"); 
  var expected = "Please ensure all fields are filled";
  assert.deepEqual(result, expected); 
});

//missing date of birth
test('register("1","1","","1","1","1")  should return "Please ensure all fields are filled"', function(assert){
  var result = register("1","1","","1","1","1"); 
  var expected = "Please ensure all fields are filled";
  assert.deepEqual(result, expected); 
});

//missing email
test('register("1","1","1","","1","1") should return "Please ensure all fields are filled"', function(assert){
  var result = register("1","1","1","","1","1"); 
  var expected = "Please ensure all fields are filled";
  assert.deepEqual(result, expected); 
});

//missing password
test('register("1","1","1","1","","1")  should return "Please ensure all fields are filled"', function(assert){
  var result = register("1","1","1","1","","1"); 
  var expected = "Please ensure all fields are filled";
  assert.deepEqual(result, expected); 
});

//missing confirmed password
test('register("1","1","1","1","1","")  should return "Please ensure all fields are filled"', function(assert){
  var result = register("1","1","1","1","1",""); 
  var expected = "Please ensure all fields are filled";
  assert.deepEqual(result, expected); 
});

//passwords given but do not match
test('register("1","1","1","1","114543","128787")  should return "Passwords do not match"', function(assert){
  var result = register("1","1","1","1","114543","128787"); 
  var expected = "Passwords do not match";
  assert.deepEqual(result, expected); 
});

//all details given but email address is already on the system
test('register("1","1","1","fdsft43s@g987l.com","123456","123456")  should return ""', function(assert){
  var result = register("1","1","1","fdsft43s@jhggl.com","123456","123456"); 
  var expected = "";
  assert.deepEqual(result, expected); 
});

//all details are valid
test('register("1","1","1","f87jhj@gfr.com","123456","123456")  should return ""', function(assert){
  var result = register("1","1","1","f87jhj@gfr.com","123456","123456"); 
  var expected = "";
  assert.deepEqual(result, expected); 
});


//Login acceptance criteria

//email missing, password given
// test('login("", "123456") should return "fail"', async function(assert){
//   var result = await login("", "123456");
//   var expected = "fail";
//   assert.deepEqual(result, expected);
// });

// //valid email given, passwrod missing
// test('login("shlomo@brill.com", "") should return "fail"', async function(assert){
//   var result = await login("shlomo@brill.com", "");
//   var expected = "fail";
//   assert.deepEqual(result, expected);
// });

// //email and password missing
// test('login("", "") should return "fail"', async function(assert){
//   var result = await login("", "");
//   var expected = "fail";
//   assert.deepEqual(result, expected);
// });

// //test valid passwoed but incorrect email format with @ but without dot after @ 
// test('login("sds@jjhg", "123456") should return "fail"', async function(assert){
//   var result = await login("sds@jhg", "123456");
//   var expected = "fail";
//   assert.deepEqual(result, expected);
// });

// //test incorrect email format without @ and with valid password
// test('login("sdsksdjh.gmail.com", "123456") should return "fail"', async function(assert){
//   var result = await login("sdsksdjh.gmail.com", "123456");
//   var expected = "fail";
//   assert.deepEqual(result, expected);
// });

// //test valid input that DNE in the DB
// test('login("sdkjhs@gmail.com", "123456") should return "fail"',async function(assert){
//   var result = await login("sdkjhs@gmail.com", "123456");
//   var expected = "fail";
//   assert.deepEqual(result, expected);
// });

// //test with valid email that exists but password with 5 chracters
// test('login("shlomo@brill.com", "12345") should return "fail"',async function(assert){
//   var result = await login("shlomo@brill.com", "12345");
//   var expected = "fail";
//   assert.deepEqual(result, expected);
// });

// //test valid and existing login - test 1
// test('login("shlomdf@gmail.com", "123456") should return "logged"',async function(assert){
//   var result = await login("shlom0923@gmail.com", "123456");
//   var expected = "success";
//   assert.deepEqual(result, expected);
// });


//sprint 4

//check out method 
// test('checkoutDelevery() should return "<option value="Herr" /><option value="Frau" />"', function(assert){
//   var result = checkoutDelevery();
//   var expected = '<option value="Herr" /><option value="Frau" />';
//   assert.deepEqual(result, expected);
// });

//used for checking out. Length = 4
test('getCategoryAndProductId(1000) should return ["Clothes",0]', function(assert){
  var result = getCategoryAndProductId(1000);
  var expected = ["Clothes",0];
  assert.deepEqual(result, expected);
});

//used for checking out. Length = 5
test('getCategoryAndProductId(20010) should return ["Food",10]', function(assert){
  var result = getCategoryAndProductId(20010);
  var expected = ["Food",10];
  assert.deepEqual(result, expected);
});

//Logging out

//test logging out
test('logout should log user out', function(assert){
  var result = logout();
  var expected = undefined;
  assert.deepEqual(result, expected);
});

// var firebase = require('firebase');
//   var email = "shlomo@brill.com";
//   var password = "123456";
//   var uID = "4Xi1q4hZ7RQYLPZZhckcP9X29Lg2";
//   firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
//     var user = userCredential.user; 
//     console.log("logged in")
//     // window.location.href = "index.html";
//   })
//   .catch((error) => {
//     var errorMessage = error.message;
//     console.log("error " + errorMessage)
//     // window.alert(errorMessage)///////////////////////////////////////////////////////////////////////////////
//   }); 
// test('logout should log user out', function(assert){
//   var userUidAndCartId = "4Xi1q4hZ7RQYLPZZhckcP9X29Lg2#Clothes_id0";
//   var result = updateQuantity(userUidAndCartId, firebase);
//   var expected = undefined;
//   assert.deepEqual(result, expected);
// });


// //test checkoutOpen
// test('checkout open', function(assert){
//   var result = checkoutOpen();
//   var expected = undefined;
//   assert.deepEqual(result, expected);
// });





//passwords matching
//  test('passwordsEqual(12, 12) should return true', function(assert) {
//   var result = passwordsEqual(12, 12);
//   var expected = true;
//   assert.deepEqual(result, expected);
// });

// test('passwordsEqual(12, 4) should return false', function(assert) {
//   var result = passwordsEqual(12, 4);
//   var expected = false;
//   assert.deepEqual(result, expected);
// });

// test('isFieldEmpty()', function(assert){
//   var result = isAnyFieldEmpty("","","","","","");
//   var expected = "Some fields are empty";
//   assert.deepEqual(result, expected); 
// });


if (typeof module !== 'undefined' && module.exports) { QUnit.load(); } // run the tests
