const accountId = 144553
let accountEmail = "tarun@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState="Madhyapredesh"



// accountId = 2 not allow

accountEmail = "tsrun@123.com"
accountPassword ="23123"
accountCity = "bhopal"
console.log(accountId);

console.table([accountId, accountEmail,accountPassword,accountCity,accountState] );

/*
prefer not to use var becouse of issue in block scope and functional scope
*/
