import mongoose from "mongoose";

const castSchema = new mongoose.Schema({
    name:{
        required: true,
        type:String
    },
    age:{
        required: true,
        type:Number
    },
    nationality:{
        required: true,
        type:String
    },
})

const Cast = mongoose.model("casts", castSchema)
export default Cast