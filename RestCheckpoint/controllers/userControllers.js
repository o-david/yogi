import User from "../models/userModel.js"

export const getUsers = async(req,res) => {
    console.log("searching for users");
    const allUsers = await User.find()
    console.log(allUsers)
    res.json(allUsers)
}
export const addUser = async(req,res) => {
    const {name, email, age, password} = req.body
    try {
        
        const addUser = await User.create(
            {
                name:name,
                email:email,
                age:age,
                password:password
            })
            console.log(addUser);
            res.json(addUser)
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Server Error")
        }
        }
