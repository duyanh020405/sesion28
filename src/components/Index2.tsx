import React from 'react'
// import Parent from "./components/Parent"
// import Products from './components/Products'

export default function App() {
  let fullName:string = "hoa"
  let age:number = 20
  let Products=[
    {
      name:"iphone15",
      id:1,
      price:5000
    },
    {
      name:"iphone14",
      id:2,
      price:400,
    },
    {
      name: "iphone13",
      id:3,
      price: 3000,
    }
  ]
  return (
    <div>App
      <p>props : properties
        - dùng để truyền,  gửi dữ liệu từ component cha xuống component con 
        -componet cha chứa componet con
      </p>
      <p>state

      </p>
      {/* <Parent a={fullName} b={age}></Parent> */}
    </div>
  )
}