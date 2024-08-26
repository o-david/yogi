import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    age:{
        required: true,
        type: Number,
    },
    favoriteFoods:{
        required: true,
        type: [String]
    },

})

const User = mongoose.model('User', userSchema)
export default User