// var request = require("request");
const rp = require("request-promise");

// new arrow function syntax
// request("https://jsonplaceholder.typicode.com/users/1",(error, response, body)=>{  
// if(!error && response.statusCode === 200){
//         var res= JSON.parse(body);
//         // console.log(res.name + " lives in "+ res.address.city);
//         console.log(`${res.name} lives in ${res.address.city}`);
//     }   
//     else{
//         console.log(error);
//     } 
         
// })

rp("https://jsonplaceholder.typicode.com/users/1")
.then((body)=>{
    const res = JSON.parse(body);
    console.log(`${res.name} lives in ${res.address.city}`);
})
.catch((err)=>{
    console.log("Error!!!!", err);
});


