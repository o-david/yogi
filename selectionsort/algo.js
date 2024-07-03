// let lucky = 1
// let other = 0

// switch(lucky){
//    case 1:
//    case 2:
//     console.log("i am case 2")
//     other++
//     console.log(other)
//     break;
//   case 2:
//    default:
//     console.log("i am default case")
//     other++
//     console.log(other)
// }
// let n = 5
// SWITCH (n) DO
//         DEFAULT : Write("Go");
//         CASE 1 : Write("My");
//         CASE 2 : Write("Code");
//     END_SWITCH
    
    
    
// let a =2
// do{
//   console.log(a)
//  a++ 
// }while(a<10)

  
  
// while(a<10){
//   console.log(a)
//   a++ 
// }
  
const customSort = (basearr)=>{
    let len = basearr.length
    for(let j =0;j<len-1;j++){
      
    for (let i = 0; i < len-1-j; i++) {
         if (basearr[i] > basearr[i+1]) {
            let temp = basearr[i]
            basearr[i] = basearr[i+1]
            basearr[i+1] = temp
         }
    }
    }
  return basearr
}

console.log(customSort([3,12,5,7,2,10]))
//3,5,7,2,12