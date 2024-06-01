const user = {
    username : "Koushik",
    price : 9999,
    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage();
user.username = "Roman";
user.welcomeMessage();

console.log(this); // empty object is being referred to , in node environment.


