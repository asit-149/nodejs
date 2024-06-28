const express = require("express")
const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    // res.send("<h1>Welcome to Home Page</h1>")
    res.write("<h1>Welcome to Home Page</h1>")
    res.write("<h1>Welcome to again Home Page</h1>")

    // res.send()
    
})
app.get("/about",(req,res)=>{
    res.status(200).send("Welcome to about Page")
})
app.get("/contact",(req,res)=>{
    res.send("Welcome to Contact Page")
})
// app.get("/temp",(req,res)=>{
//     res.send([
//         {
//         id: 1,
//         name : "Asit"
//     },
//         {
//         id: 1,
//         name : "Asit"
//     },
//         {
//         id: 1,
//         name : "Asit"
//     },
//         {
//         id: 1,
//         name : "Asit"
//     },
// ])
// })
app.get("/temp",(req,res)=>{
    res.json([
        {
        id: 1,
        name : "Asit"
    },
        {
        id: 1,
        name : "Asit"
    },
        {
        id: 1,
        name : "Asit"
    },
        {
        id: 1,
        name : "Asit"
    },
])
})
app.listen(port,()=>{
    console.log(`listening to the port no ${port}`)
})