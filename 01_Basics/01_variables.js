const accountId = 101;
let accountEmail = "cronin@google.com";
var accountPass = "cronin";

/*
Prefer not to use "var" variable because of issue in block scope and functional scope
*/

accountCity = "Vadodara"; // This is allowed but not good for practice

/*
accountId = 1;
// trying to change accountId
// TypeError: Assignment to constant variable.
*/

console.table([accountId, accountEmail, accountPass, accountCity]); // Table view for all the console elements