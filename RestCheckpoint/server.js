import dotenv from "dotenv"
import connectdb from "./utils/db.js";
import express from 'express'
import User from "./models/userModel.js";
import { addUser, getUsers } from "./controllers/userControllers.js";
const app = express()


dotenv.config()
connectdb()
app.use(express.json())

app.get("/", (req,res)=>{
    res.end("Server is working")
})

app.route('/user')
.get(getUsers)
.post(addUser)
.put()
.delete()


app.listen(4005, ()=>{
    console.log("Server running on port http://localhost:4005")  // display the server is running on this port
})