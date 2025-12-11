import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Postpage = () => {
  return (
    <div>
    <ol>
        <li><Link to="/postpage/1">Post1</Link></li>
        <li><Link to="/postpage/2">Post2</Link></li>
        <li><Link to="/postpage/3">Post3</Link></li>
        <li><Link to="/postpage/newpost">Newpost</Link></li>
        
    </ol>
    <Outlet/>
    </div>
    
   
  )
}

export default Postpage