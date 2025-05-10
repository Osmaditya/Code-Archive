const express = require("express");
const app = express();

const port = 8080;

app.get("/register",(req,res)=>{
    let {user,pass}= req.query;
    res.send(`standart GET response. Welcome ${user}`);
});
app.post("/register",(req,res)=>{
    res.send("standart POST response");
});

app.listen(port, ()=>{
    console.log("Server is listening at port ",port);
})