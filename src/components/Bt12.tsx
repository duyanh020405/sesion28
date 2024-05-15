import React from 'react'
import { useState } from 'react'
export default function Bt12() {
const [input,changeInput]=useState<string>("")
const lay =()=>{
  
  let input = document.getElementById("ip") as HTMLInputElement
  if(input != null){
    changeInput(input.value)

  }
}
  return (
    <div>
      <h4>Bai 12</h4>
       <p>ket qua : {input}</p>
      <input type="text" id='ip'/>
      <button onClick={lay}>Lay code</button>
    </div>
  )
}

