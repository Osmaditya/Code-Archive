const express = require("express"); //returns a function
const app = express();      //express() functions returns an object

let port = 3000;

app.listen(port,()=>{   //creates a server on your local mc at port 3000 which listens for requests
    console.log(`app is listening at port ${port}`);
});
//app.USE

// app.use((req,res)=>{    //middleware function): app.use track krta hai koi bhi request aaye to ye function chalega
//     // console.log(req)
//     console.log("request recieved");

//     res.send("Hello World"); //sends a response to the client(localhost:3000) in the form of string (on browser)
//     // res.send({name:"John",age:30}); //sends a response to the client(localhost:3000) in the form of JSON object
// });

// app.GET: 

// it is used to handle GET requests with a specific URL path(routing)
// app.get("/",(req,res)=>{
//     res.send("We are on root");
// });
// app.get("/orange",(req,res)=>{
//     res.send("You are on the orange path");
// });
// app.get("/apple",(req,res)=>{
//     res.send("YOu are on the apple path");
// });
// app.get("*",(req,res)=>{    
//     //wildcard route: it will match any path that is not define above
//     res.send(" Error 404 page is not found");
// });

//app.Post 
// app.post("/",(req,res)=>{   //for post request
//     res.send(" Post request");
// });

//PAth Parameters: isse hm URL se data le sakte hain

app.get("/:username/:id",(req,res)=>{  
    console.log(req.params); //[Object: null prototype] { username: 'aditya', id: '23' }
    // req.params is an object that contains the parameters from the URL
    let {username,id} = req.params; //destructuring the object  //
    res.send(`Hello ${username} with id ${id}`); //sends a response to the client(localhost:3000) in the form of string (on browser) 
});
// http://localhost:3000/aditya/23 : Hello aditya with id 23

//Additional info in Query string:

app.get("/search",(req,res)=>{
    console.log(req.query); //{ q: 'apple'} //req.query is an object that contains the query string parameters from the URL
    let {q}= req.query; //destructuring the object  //single search value
    
    if(!q){
        res.send("Please provide a search term"); //if q is not present in the query string
    }
    res.send(`Search result for query: ${q}`); 
    
});
//http://localhost:3000/search?q=apple : Search result for query: apple


