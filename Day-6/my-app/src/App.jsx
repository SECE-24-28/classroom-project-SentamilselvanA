// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let city="Covai"
  let nums=[11,22,33]
  // const [count, setCount] = useState(0)
// let l;
  return (
    <>
    <h1>Welcome to {city}</h1>
    <p>Lucky Numbers:{nums}</p>
    <p>{JSON.stringify({name:"Rohit",age:40})}</p>
    {/* <p>{l==1}</p> true,false,null,undeined */}
    </>
  )
}

export default App
