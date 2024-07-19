// Primitive  Data Types
// call by value (changes in copy)
// 7 types : String  , Number , Boolean , null , undefined , Symbol , BigInt

const score1 = 100 ;
const score2 = false; 
// const score:number = 100 ; TypeScript

const scoreValue = 100.3;
const isLoggedIn =  false;
const outsideTemp =  null;
let userEmail = undefined;
userEmail; // same as undefined assignment 

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id==anotherId);



const bigNumber = 3423742266473264346274722n;




// Reference Type (Non Primitive)

// Array , Objects , Functions , 

const heroes = ["shaktiman","magraj","doga"];
let myObj = {
    name : "Koushik",
    age : 22 ,
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof(bigNumber));
console.log(typeof(big)); // doesnt exist 

console.log(typeof(outsideTemp));
console.log(typeof(score1));
console.log(typeof(score2));
console.log(typeof(scoreValue));
console.log(typeof(myFunction));
console.log(typeof(heroes));
console.log(typeof(anotherId));
console.log(typeof(id));




// +++++++++++++++++++++++


// Stack(Primitive)(Copy) , Heap(Non-Primitive)(Reference)

let myYoutubeName = "Koushik Das";
let anotherName = myYoutubeName;
anotherName = "KD"
console.log(myYoutubeName);
console.log(anotherName);
console.log(anotherName==myYoutubeName);



let user1 = {
    email : "user@gmail.com",
    upi : "kd@ybl"
}

let user2 = user1 ;
user2.email = "koushik@google.com";
console.log(user1);
console.log(user2);
console.log(user1.email);
console.log(user2.email);

