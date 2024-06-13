// axios.get('/api/orders')
// .then((response)=>{
//   showOrderList("#order-list", response.data)
//   // console.log(headers);
// })

let statusReq = axios.get("/api/orderStatuses")
let addressReq = axios.get("/api/addresses")
let addressTypeReq = axios.get("/api/NIK")

let statuses = []
let addresses = []
let nik=[]
Promise.allSettled([statusReq, addressReq, addressTypeReq]).then(([statusRes, addressRes, addressTypeRes])=>{
  if (statusRes.status === 'fulfilled') {
    statuses = statusRes.value.data
  }
  else
  addresses = addressRes.value.data
  nik= addressTypeRes.value.data

  
  return axios.get("/api/orders")
  })
  .then(({data})=>{

    let orders = data.map((b)=>{
      let addr = addresses.find(a=>a.id===b.shippingAddress)
      console.log(addr);
      return {
       ...b,
       orderStatus: statuses.find(s=>s.id===b.orderStatusId).description,
       shippingAddressText:`${addr.street}, ${addr.city}, ${addr.state}`
       }
    })
    console.log(orders)
  showOrderList("#order-list", orders)
  }).catch((err)=>{
    showError("#order-list", err)
    console.log(err);
  })