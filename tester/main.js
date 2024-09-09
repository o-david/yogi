const elem = document.getElementById("root")

elem.innerHTML = `stuff`


    fetch("http://localhost:4005/test",
        {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'  // Specify the content type as JSON for the request body
            },
            body: JSON.stringify({
                name:"stuff",
            })
        }
    )
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        elem.innerHTML = `
            <h1> ${data.name}</h1>
            <p> ${data.age}</p>
        `
    })

    // fetch("http://localhost:4005/test")
    // .then((response)=>response.json())
    // .then((data)=>{
    //     console.log(data)
    //     elem.innerHTML = `
    //         <h1> ${data.name}</h1>
    //         <p> ${data.others}</p>
    //     `
    // })