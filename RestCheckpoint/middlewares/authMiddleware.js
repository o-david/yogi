export const loggedIn = (req, res, next)=>{
    const allow = true
    if(allow){
        next()
    }
    else{
        res.send("you are not allowed to access this route ")
    }

}