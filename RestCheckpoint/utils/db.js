import mongoose from "mongoose";

const connectdb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName:"RestCheckpoint"
        });
        console.log("Connected to MongoDB",conn.connection.host);
    } catch (error) {
        console.error(`Error connecting to database: ${error}`);
    }
}

export default connectdb;


let b = 25
//if b<10 a= "less" else ="greater" 
let a = (b<10)? (0 || "less") : "greater"
// if (b<10) {
//    a= "less" 
// } else {
//     a= "greater"
// }

// (1>2) ? ("klsdks"||"hello") : (90 || 2)
console.log(a)

