const name = "Koushik-YT";
const repoCount =  50;

//console.log(name + repoCount + " Value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Koushik-YT-CODES");
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));


const newString = gameName.substring(0,4); // negative  indices will noit be obeyed 
console.log(newString);

const anotherString1 = gameName.slice(0,4); // difference than sub : negative indices
console.log(anotherString1);

const anotherString2 = gameName.slice(-8,4);
console.log(anotherString2);


const newStringOne = "     Koushik    ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://koushikdas.com/koushik%69Das"
console.log(url);
console.log(url.replace('%69','-'));

console.log(url.includes("koushik"));

console.log(gameName);
console.log(gameName.split('-'));

