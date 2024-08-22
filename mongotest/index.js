import { MongoClient } from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const uri = process.env.MONGO_URI

const client = new MongoClient(uri)
const castsCollection = client.db("Mypeople").collection("casts")

const connectToDatabase = async() =>{
    try {
        await client.connect()
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(`Error connecting to database: ${error}`)        
    }
} 

const cow = [
    {
    name:"Bash",
    age:24,
    nationality:"Arabian"
},
    {
    name:"Bethel",
    age:20,
    nationality:"Kenyan"
}
]

const main = async()=>{
    try {
        await connectToDatabase()
        let result = await castsCollection.findOne({nationality:"Canada"})
        console.log(result)
    } catch (error) {
        console.error(`Error connecting to database: ${error}`)
    }
    finally {
        await client.close()
    }
}

main()