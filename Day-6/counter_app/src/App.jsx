import { useState } from 'react'
import './App.css'

function App() {
 
  const [count, setCount] = useState(0)
 const increase = () => {
   setCount(count+1)
 }
 const decrease =()=>
 {
  setCount(count-1)
 }
  let des={color:'blue'}
  let frnds=['ram','sam','jam']
  return (
    <>
     <h1 style={des}>Counter</h1>
     <p>Count:{count}</p>
     <button onClick={increase}>+</button>
     <button onClick={decrease}>-</button>  
      {
        frnds.map((frnd)=>
        <p>{frnd}</p>
        )
      }
    </>
  )
}

export default App
