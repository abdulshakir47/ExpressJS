

const express = require("express")

const app = express()


app.get("/",(req,res)=>{
    res.json({message:"Hello World"})
})


app.get("/user/:id",(req,res)=>{
    const id = req.params.id
    res.send("Hello Shakir "+id)
})


app.get("/users",(req,res)=>{
    const id = req.query.id
    console.log(id);
    res.send("Hello Shakir "+id)
})

app.listen(8080,()=>{
    console.log("Server is running");
})