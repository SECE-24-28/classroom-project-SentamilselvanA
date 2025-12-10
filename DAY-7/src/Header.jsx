import React from 'react'
import './Own_todo.css'
const Header = (props) => {
    
  return (
    <div className="header"> 
        {props.title}
    </div>
  )
}

export default Header