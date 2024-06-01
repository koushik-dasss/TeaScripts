const tinderUser = new Object (); // singleton object 
const tinderUser2 = {}; // non singleton object 


tinderUser.id  = "123abc";
tinderUser.name = "Roman";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

/*console.log(tinderUser2);
console.log(tinderUser==tinderUser2);
console.log(typeof(tinderUser)==typeof(tinderUser2));
*/

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Koushik",
            lastname : "Das"
        }
    }
}
console.log(regularUser);

console.log(regularUser.fullname);

console.log(regularUser.fullname.userfullname);

console.log(regularUser.fullname.userfullname.firstname);

console.log(regularUser.fullname.
userfullname.lastname);

// console.log(regularUser.fullname?.userfullname.firstname); // ? => if else 


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj4 = {5:"a",6:"b"};


/*const obj3 = {obj1,obj2}
console.log(obj3);


obj3 = Object.assign(obj1,obj2);
console.log(obj3);*/


//obj3 = Object.assign({},obj1,obj2,obj4);


//const obj3 = {...obj1 , ...obj2 , ...obj4};
//console.log(obj3);


const users = [
    {
        id:1,
        email:"g@gmail.com"
    },
    {

    },
    {

    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));


const course = {
    coursename: "js in hindi",
    price : "6969",
    courseInstructor : "Koushik"
}
// course.courseInstructor

const{courseInstructor : instructor } = course ;
//console.log(courseInstructor);
console.log(instructor);

/* React destructuring 
const navbar = ({company}) => {

}
navbar(company = "Koushik")
*/

/*{
    "name" : "Koushik",
    "courseName" : " JS in Hindi",
    "price" : "free"
}
*/
// {
//     {},
//     {},
//     {}
// }









