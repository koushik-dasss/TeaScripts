// console.log("K");
// console.log("O");
// console.log("U");
// console.log("S");
// console.log("H");
// console.log("I");
// console.log("K");

function sayMyName() {
    console.log("K");
    console.log("O");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("K");
}
// sayMyName => Reference
// sayMyName() => Function Execution

//sayMyName();


// function addTwoNumbers(number1 , number2 ){
//     console.log(number1+number2);
// }
function addTwoNumbers(number1 , number2 ){
    // let result  = number1+number2;
    // return result; // return is always the last statement 
    
    return number1+number2;

}
// console.log("Result is "+ result);
// console.log("Result is ", result);
const result = addTwoNumbers(3,null);
// console.log("Result is "+ result);
// console.log("Result is ", result);
// console.log(result);

function loginUserMessage(userName = "Koushik"){
    // if(userName === undefined){
    //     console.log("Please enter a username .");
    //     return ;

    // }
    if(!userName){
        console.log("Please enter a username .");
        return ;

    }
    return `${userName } just logged in `
}
// console.log(loginUserMessage("Koushik Das"));
// console.log(loginUserMessage("Roman"));


function calculateCartPrice(val1,val2,...num1){ // rest
    return num1; // ... both are rest and spread depending upon situation
}

// console.log(calculateCartPrice(200,400,600,69));

const user = {
    username : "Koushik",
    price : 199 // prices will get it undefined 
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
console.log(user);
handleObject(user);

handleObject({
    username : "sam",
    price : 399
}
)
const myArray =  [200,400,100,600];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,69,76,289]));












