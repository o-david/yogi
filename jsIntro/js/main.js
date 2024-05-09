// // // let a=0
// // // let b="10"


// // // if(a>5 && b<2){
// // //     console.log(a);
// // // }




// // // // a= a+5

// // // // a+=5

// // // // a%=6
// // // // console.log(a);

// // let x=1
// // let y=0
// // let z = null
// // console.log(x&&y);
// // console.log(z&&y);
// // console.log(x&&z);

// // let userName = prompt("enter your name")

// // userName && alert(`Hi, ${userName}  welcome to my platform`)

// function Tname(user) {
//         console.log(`Hi, ${user}  welcome to my platform`)
// }
// Tname("Paul")

let age = prompt("enter your age ")
let ticketPrice 
if (age <= 12) {
    ticketPrice = 10
} 
else if (age <= 18) {
    ticketPrice = 15
}
else if (age <= 55) {
    ticketPrice = 100
}
else{
    ticketPrice = 20
}

alert(`the cost of your ticket is $${ticketPrice}`)