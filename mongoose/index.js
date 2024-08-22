import dotenv from "dotenv"
import connectdb from "./utils/db.js";
import Cast from "./model/castModel.js";

dotenv.config()

const main = async()=>{
    await connectdb()
    
    const addCast = new Cast({
        name: "John Doe",
        age: 30,
        nationality: "American"
    })
    
    addCast.save().then(result => console.log(result)).catch(error => console.error(error))
}
main()