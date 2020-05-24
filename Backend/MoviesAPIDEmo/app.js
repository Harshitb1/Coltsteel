const axios = require("axios");
const express = require("express");
const app= express();
const request = require("request");
var port= process.env.PORT || 3000;

app.set("view engine","ejs");

// axios.get("https://api.themoviedb.org/3/search/company?api_key=9c4fcff86f8d5c79599176337b35feb7&query=star&page=1")
// .then((response)=>{
//     console.log(response.data);
// }).catch((error)=>{
//     console.log(error);
// });

// app.get("/results", (req, res)=>{
//     request("https://api.themoviedb.org/3/search/movie?api_key=9c4fcff86f8d5c79599176337b35feb7&language=en-US&query=star&page=1&include_adult=false",
//     (error, response, body)=>{
//         if(!error && response.statusCode===200){
//             var Jsonbody= JSON.parse(body);
//             res.send(Jsonbody.results[0].original_title);
//         }
        
//     })
// });

app.get("/",(req, res)=>{
    res.render("search");
});

app.get("/results",(req, res)=>{
    var search= req.query.search;
    var url= "https://api.themoviedb.org/3/search/movie?api_key=9c4fcff86f8d5c79599176337b35feb7&language=en-US&query="+search+"&page=1&include_adult=false"
    axios.get(url)
    .then((response)=>{
        var data= response.data;
        res.render("results",{data: data});
    })
    .catch((error)=>{
        console.log(error);
    });
});


app.listen(port, ()=>{
    console.log(" Movie App server started!!!!");
})