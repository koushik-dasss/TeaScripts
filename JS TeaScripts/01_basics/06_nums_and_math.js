const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(typeof(balance));
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const anotherNumber = 123.8966;

console.log(anotherNumber.toPrecision(4));
console.log(typeof(anotherNumber.toPrecision(4)));
const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));
console.log(typeof(hundreds.toLocaleString()));

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);



// ++++++++++++++++++++++++++++++++++++++ Maths 


console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));
console.log(Math.sqrt(25));
console.log(Math.max(4,34,5,6,7));
console.log(Math.min(4,34,5,6,7));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.min((Math.random()*10)+1));



const min = 10 ;
const max = 20 ;


console.log(Math.floor(Math.random()*(max - min + 1 )+min));

