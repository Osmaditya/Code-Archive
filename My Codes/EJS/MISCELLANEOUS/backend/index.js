const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user,pass}= req.query;
    res.send(`standart GET response. Welcome ${user}`);
});
app.post("/register",(req,res)=>{
    let {user,pass} = req.body; //iske liy middleware ko use krna hoga parse krne l liy otherwise UNDEFINED dega
    res.send(`standart POST response.Welcome ${user}`);
});

app.listen(port, ()=>{
    console.log("Server is listening at port ",port);
})