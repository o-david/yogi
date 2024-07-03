const fact= (num)=>{
    if(num<=1) {
         return 1;
     }
    return num * fact(num+1)
}

const fact2= (num)=>{
    let total = 1
    for (let index = num; index >0 ; index--) {
        total*=index
    }
    return total
}



console.log(fact(5));

//= 5 x fact(4)
//= 5 x 4 x fact(3)
//= 5 x 4 x 3 x fact(2)
//= 5 x 4 x 3 x 2 x fact(1)
//= 5 x 4 x 3 x 2 x 1
let numb = 25
while (numb>10) {
    console.log(numb);
    numb--
}