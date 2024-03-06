const accountID= 14453 //Cannot change value because now its constant
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //possible but not recommended
let accountState;

//accountID = 2 //this is not allowed 
accountEmail = "yash@gmail.com"
accountPassword = 12587
accountCity = "Bangalore"

/*
Prefer not to use var
because of issue in blckk scope and functional scope
*/

console.log(accountID)
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])