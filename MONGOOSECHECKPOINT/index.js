import dotenv from "dotenv"
import connectdb from "./utils/db.js";
import express from 'express'
import User from "./models/userModel.js";
const app = express()


dotenv.config()
connectdb()

app.get("/", (req,res)=>{
    res.end("i woork")
})

// Route for the Create and Save a Record of a Mode task
app.get("/saverecord", async(req,res)=>{
    const addUser = new User({
        name: "John Kev",
        age: 40,
        favoriteFoods: ["Boiled Yam", "Coffee","Fried Chicken"]
    })
    
    const addedUser = await addUser.save()
    console.log(addedUser)
    res.json(addedUser)
    //     (err, data)=>{
    //     if(err) throw err
    //     res.json(data)
    // })
})

app.listen(4003, ()=>{
    console.log("Server running on port http://localhost:4003")  // display the server is running on this port
})