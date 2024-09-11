import dotenv from "dotenv"
import connectdb from "./utils/db.js";
import express from 'express'
import cors from "cors"
import { addUser, getUsers } from "./controllers/userControllers.js";
import router from "./routes/userRoutes.js";
const app = express()

dotenv.config()
// connectdb()
app.use(express.json())
app.use("/api",router)
app.use(cors({
    origin: "*",
    // methods: ["GET", "POST", "PUT", "DELETE"],
    // credentials: true, // allow session cookies from browser to pass through
    // allowedHeaders: ["Content-Type", "Authorization"]  // allow these headers to pass through the request and response
}))

app.get("/", (req,res)=>{
    res.end("Server is working")
})
app.get("/test", (req,res)=>{
    res.json({
        name:"stuff",
        others:"more stuff"
    })
})

app.post('/test', (req, res)=>{
    const {name, age} = req.body
    // const name = req.body.name
    // const age = req.body.age
    console.log(req.body);
    
    console.log(name);
    console.log(age);
    

    res.json({
        name:name,
        age:age
    })
})




app.listen(4005, ()=>{
    console.log("Server running on port http://localhost:4005")  // display the server is running on this port
})