const fs = require('fs')

fs.writeFile('welcome.txt', "Hello Node",(err)=>{
    if(err){
        console.log(err.stack)
        return
    }   
    console.log("success")
} )
fs.readFile('hello.txt',(err, data)=>{
    if(err){
        console.log(err.stack)
        return
    }   
    console.log(data.toString())
} )