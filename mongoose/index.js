import dotenv from "dotenv"
import connectdb from "./utils/db.js";
import Cast from "./model/castModel.js";

dotenv.config()

const main = async()=>{
    await connectdb()
    
    const addCast = new Cast({
        name: "John Kev",
        age: 40,
        nationality: "American"
    })
    
    const added = await addCast.save()
}
const main2 = async()=>{
    await connectdb()
    
    const addCast = await Cast.create({
        name: "Kenny Bev",
        age: 16,
        nationality: "Ukrainian"
    })    

    console.log(addCast);

}
main2()