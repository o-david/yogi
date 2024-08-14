const express =require('express')
const app = express()

app.get("/", (req,res)=>{
    res.send("<h1>Hello World from Express</h1>")
})
app.get("/ab?cd", (req,res)=>{
    res.send("<h1>Hello Abcd</h1>")
})
app.get("/ab*cd", (req,res)=>{
    res.send("<h1>Hello Ab*cd</h1>")
})
app.get("/david/:org", (req,res)=>{
    console.log(req.params)
    res.send(`<h1>Hello ${req.params.org}</h1>`)
},
app.get("/david/:org", (req,res)=>{
    console.log(req.params)
    res.send(`<h1>Hello ${req.params.org}</h1>`)
},
)
app.get("*", (req,res)=>{
    res.send("<h1>I am the greatest</h1>")
})


app.listen(4003, ()=>{
    console.log("Server running on port 4003")  // display the server is running on this port
})