const express = require('express')

const app = express();

app.get("/demo",(req,res)=>{
    res.send("Hello from Asit")
})

//API- Endpoint - Route
app.get("/",(req,res)=>{
    res.json({type:"GET"})
})
app.post("/",(req,res)=>{
    res.json({type:"POST"})
})
app.put("/",(req,res)=>{
    res.json({type:"PUT"})
})
app.delete("/",(req,res)=>{
    res.json({type:"DELETE"})
})
app.patch("/",(req,res)=>{
    res.json({type:"PATCH"})
})



app.get("/about",(req,res)=>{
    res.send("Hello from About page")
})

app.listen(8000, ()=>{
    console.log("listening the port 8000")
})

// const express = require('express')
// const app = express()

// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

// app.use(myLogger)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(8000)