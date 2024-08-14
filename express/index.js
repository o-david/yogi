const express =require('express')
const app = express()
const user =require('./routes/users.js')

app.get("/", (req,res)=>{
    res.send("<h1>Hello World from Express</h1>")
})

app.use("/user", user)

app.listen(4003, ()=>{
    console.log("Server running on port 4003")  // display the server is running on this port
})