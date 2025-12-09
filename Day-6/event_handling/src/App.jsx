
import './App.css'
import Header from './Header'
import Content from './Content'
import { useState } from 'react'


function App()
{
const [age,setAge]=useState(21)
 
  // const [count, setCount] = useState(0)
  // let demo=(name)=>
  // {
  //   console.log("Hi "+name)
  // }
  const call=()=>{
    setAge(23)
  }

  return (
    <>
     <Header></Header>
     <Content></Content>
     <p>Age:{age}</p>
     <button onClick={call}>Birthday Button</button> 
    </>
  )
}

export default App
