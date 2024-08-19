import { MongoClient } from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const uri = process.env.MONGO_URI

const client = new MongoClient(uri)
const dbname = "Mypeople"

const connectToDatabase = async() =>{
    try {
        await client.connect()
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(`Error connecting to database: ${error}`)        
    }
} 

const main = async()=>{
    try {
        await connectToDatabase()
    } catch (error) {
        console.error(`Error connecting to database: ${error}`)
    }
    finally {
        await client.close()
    }
}

main()