import React, { useState } from 'react'
import './Own_todo.css'

const Searchitem = ({handleSearch}) => {
    const[search,setSearch]=useState("");
  return (
    <div className='Searchitem'>
        <input type="text" placeholder='Search Item' 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>
        <button  onClick={()=>{
            handleSearch(search);
            setSearch("");
        }
        }>Search</button>
    </div>
  )
}

export default Searchitem