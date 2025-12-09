import React from 'react'
import './Style.css'
const Header = () => {
  let des={color:"blue"}
  return (
    <div className='bg'>
        <h1 style={des}>Welcome to My App</h1>
        <p>This is the header section of the application.</p>
        
    </div>
  )
}

export default Header