let users=[]
fetch("http://localhost:4005/user")
  .then(response => response.json())
  .then((data) => {
    // console.log("Data:", data);   
    users= data
    console.log(users)
    fetch("http://localhost:4005/user",{
        method:'POST',
        body: {
            name:users[0].name,
            email:users[0].email + "a",
            age:users[0].age+1,
            password:users[0].password
        }
    }
    )
      .then(response => response.json())
      .then((data) => {
        console.log("Data:", data);   
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

