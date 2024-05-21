let btn3 = document.querySelector("span")
let btn2 = document.getElementById("two")
console.log(btn2);
btn2.onclick=test
btn3.addEventListener('click', ()=>{
    console.log("i am awesome");
    let test = document.querySelector("h1");
    test.style.color = "pink"

    let parentdiv = document.querySelector("div")
    parentdiv.innerHTML+= '<p>I am awesome all he time</p>'
    // let childP = document.createElement('p')
    // childP.innerText = "I am a child"

    // parentdiv.appendChild(childP)

})
function changer() {
  let test = document.querySelector("h1");
  let testClass = test.getAttribute("class");
  if (!testClass) {
    test.setAttribute("class", "text-[#f83]");
  } else {
    let testarr = testClass.split(" ");
    console.log(testarr);
    for (const index in testarr) {
      if (testarr[index].includes("text")) {
        console.log(testarr[index]);
        testarr[index] = "text-[#f83]";
        console.log(testarr[index]);
      }
    }

    console.log(testarr);
    test.setAttribute("class", testarr.join(" "));
  }
}

function test() {
    console.log("I work");
}

document.addEventListener('keydown', function(event) {
    let log = document.getElementById("pressed")
    log.textContent+= " " +event.code    
})

