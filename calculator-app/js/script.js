const numbers = document.querySelectorAll(".num")
const opps = document.querySelectorAll(".opps")
const screen = document.querySelector(".screen")
const clr = document.querySelector(".clr")
const equal = document.querySelector(".equal")

clr.addEventListener('click', ()=>{
    screen.innerHTML = 0
})

console.log(opps);
numbers.forEach((num) => {
    num.addEventListener("click", () => {
        if(screen.innerText==0){
            screen.innerHTML = num.innerHTML
        }
        else{
        screen.innerHTML += num.innerHTML
    }
    })

})
opps.forEach((opp) => {
    opp.addEventListener("click", () => {
        let screentext =screen.innerText
        if(screentext==0 || screentext.includes("+") || screentext.includes("/")|| screentext.includes("*") || screentext.includes("-")){
            console.log("nope")
        }
        else{
        screen.innerHTML += opp.innerHTML
    }
    })
})

equal.addEventListener("click", () => {
    let screentext =screen.innerText
    if(screentext.includes("+")){
        let screenarr = screentext.split("+")
        screen.innerHTML= parseFloat(screenarr[0]) + parseFloat(screenarr[1])
    }
    else if(screentext.includes("/")){
        let screenarr = screentext.split("/")
        screen.innerHTML= parseFloat(screenarr[0]) / parseFloat(screenarr[1])
    }
    else if(screentext.includes("*")){
        let screenarr = screentext.split("*")
        screen.innerHTML= parseFloat(screenarr[0]) * parseFloat(screenarr[1])
    }
    else if(screentext.includes("-")){
        let screenarr = screentext.split("-")
        screen.innerHTML= parseFloat(screenarr[0]) - parseFloat(screenarr[1])
    }

})