// Singleton 

// Constructor => Singleton
// Literal => No Singleton

// Object Literals:-

// Object.create => Constructor Method 
const mySym = Symbol("key1");

const JsUser = {
    name /* " name "(string)*/:"Koushik " /* */,
    "full name "  : "Koushik Das ",
    [mySym]: "myKey1", // []
    age : 18,
    location:"Cuttack",
    mail : "kd@google.com",
    isLoggedIn : false ,
    lastLogInDays : ["Monday","Saturday"] 
};
console.log(JsUser);
console.log(JsUser.mail);
console.log(JsUser["mail"]);
console.log(JsUser["full name "]);
console.log(JsUser[mySym]);
console.log(typeof(JsUser[mySym])); // string type which should be of Symbol type

JsUser.mail = "kd@gpt.com";

// Object.freeze(JsUser);
console.log(JsUser.mail);

JsUser.mail  = "kd@mail.com";
console.log(JsUser.mail);

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting); // undefined
// console.log(JsUser.greeting()); // not a function  as the JSUser is freezed
console.log(JsUser.greeting());
console.log(JsUser.greeting2);
console.log(JsUser.greeting2());


