// var c = 300;
// Global Scope
let a = 300;
if(true){  // block scope
    let a = 10 ;
    const b = 29;
    // console.log("INNER VALUE : ", a );

    // c = 30;  // var c = 30;
}
// block scope is a part of global scope
// But global scope is not a part of the block scope
// console.log(a);
// console.log(b);
// console.log(a);

function one(){
    const username = "Koushik";

    function two(){
        const website = "youtube";
        // console.log(username);
        // console.log(website);
    }
    // console.log(website); error 
    two();
}
one();
// In nested functions , the child function can access the variables of the parent function.

if(true){
    const username = "Koushik";
    if(username=="Koushik"){
        const website = " youtube";
        // console.log(website);
        // console.log(username+website);
    }
    // console.log(website); // error 
}
// console.log(username); // error 


// ++++++++++++++++++ Interesting
console.log(addone(5));
function addone(num){
    return num+1;
}
console.log(addone(5));
console.log(addtwo(5));
const addtwo /* expression(variables)*/ = function(num){
    return num+2;
} // Hoisting => Held the function in a  variable
addtwo(5);
console.log(addtwo(5));


