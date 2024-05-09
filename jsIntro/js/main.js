// // // // let a=0
// // // // let b="10"


// // // // if(a>5 && b<2){
// // // //     console.log(a);
// // // // }




// // // // // a= a+5

// // // // // a+=5

// // // // // a%=6
// // // // // console.log(a);

// // // let x=1
// // // let y=0
// // // let z = null
// // // console.log(x&&y);
// // // console.log(z&&y);
// // // console.log(x&&z);

// // // let userName = prompt("enter your name")

// // // userName && alert(`Hi, ${userName}  welcome to my platform`)

// // function Tname(user) {
// //         console.log(`Hi, ${user}  welcome to my platform`)
// // }
// // Tname("Paul")

// // let age = prompt("enter your age ")
// let again = false
// do {

// let userType = prompt("enter your user type ")
// let ticketPrice 
// // if (age <= 12) {
// //     ticketPrice = 10
// // } 
// // else if (age <= 18) {
// //     ticketPrice = 15
// // }
// // else if (age <= 55) {
// //     ticketPrice = 100
// // }
// // else{
// //     ticketPrice = 20
// // }

// switch (userType) {
//     case "STaFF":
//         ticketPrice=2
//         break;
//     case "student":
//         ticketPrice=49
//         break;
//     default:
//         ticketPrice=100
//         console.log("Neither student nor staff");
//         break;
// }

// alert(`the cost of your ticket is $${ticketPrice}`)
// again = confirm("go again")

// }while (again)



// for (let i = 10; i > 0; i-=1) {
//     if (i==5) {
//         continue
//     }
//     console.log("my name is sam" + i);
// }



// console.log(names[0])

// for (let index = 0; index < names.length; index++) {
    //     console.log(names[index]);
    
    // }
    
    let names = ["sam", "jones", "emma", "muni", "nik"]
//     for (const a in names) {
//     console.log(names[a]);
// }

names.pop()
names.pop()
for (const a of names) {
        console.log(a);
}