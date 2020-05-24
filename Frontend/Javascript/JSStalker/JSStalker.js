var firstName= prompt("Whats is your first name?");
var lastName= prompt("Whats is your last name?");
var age= prompt("Whats is your age?");

console.log("Your full name is "+ firstName+" "+ lastName);
console.log("You are "+age+" years old.")

if(age<=0){
    console.log("Its an error!!");
}
 if(age===21){
    console.log("Happy 21st bday!!");
}
 if((age%2)!==0){
    console.log("Your age is odd");
}

 if(age % Math.sqrt(age)===0){
    console.log("your age is a perfect square");
}