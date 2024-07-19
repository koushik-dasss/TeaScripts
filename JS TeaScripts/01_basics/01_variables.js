const accountId = 144553
let accountEmail = "koushikdas6969@gmail.com"
var accountPassword = "12345"
accountCity = "BBSR" // possible but not recommended 
let accountState ;

// accountId = 2  // not allowed (const)
/*   Scope with {}
{

}
if(condition){

}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/
/*
Prefer not to use var because of issue in  block scope and functional scope .
*/
accountEmail = "kd@gmail.com"
accountPassword = "6969"
accountCity = "CTC"

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
