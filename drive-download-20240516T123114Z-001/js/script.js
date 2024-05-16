const cards = document.querySelectorAll(".main-card")
console.log(cards);
cards.forEach((card) => {
    const add = card.querySelector(".fa-plus-circle")
    const sub = card.querySelector(".fa-minus-circle")
    const qty = card.querySelector(".quantity")
    add.addEventListener("click", () => {
        qty.innerHTML = parseInt(qty.innerHTML) + 1
        console.log(qty.innerHTML)
        getTotal()
    })
    sub.addEventListener("click", () => {
        qty.innerHTML = parseInt(qty.innerHTML) - 1
        console.log(qty.innerHTML)
        if (qty.innerHTML < 1) {
            qty.innerHTML = 1
        }
        getTotal()
    })

})

const getTotal = ()=>{
    let total = 0
    cards.forEach((card) => {
        const qty = card.querySelector(".quantity")
        const price = card.querySelector(".unit-price")
        total += parseInt(qty.innerHTML) * parseInt(price.innerHTML.replace('$', ''))
    })
    document.querySelector(".total").innerHTML = total+"$"
}