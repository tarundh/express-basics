const express = require("express");
const app = express ();

app.use(express.json());


app.get("/", function(req, res){
    res.send("my first server")
});

app.get("/about", (req, res)=>{
    res.send("Dont you know me user. Go back to other page to know about me")
});

app.get("/about/:name", (req, res)=>{
    console.log(req.params)
    res.send("Dont you know me " + req.params.name + " . Go back to other page to know about me")
});

app.get("/customer", (req, res)=>{
    console.log(req.query);
    const{name,age} = req.query;
    res.send(`Hey customer ${name} welcome to my server. My age is ${age}`)
})

app.post("/saveCustomer", (req,res)=>{
    console.log(req.body)
    res.send("customers saved succesfully")
})


app.listen(3000, function(req, res){
    console.log("server is running perfectly")
})