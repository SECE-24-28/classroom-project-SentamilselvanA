import React, { useContext } from 'react'
import DataContext from './DataContext';

const Search = () => {
    const {num,search,Setsearch}=useContext(DataContext);
  return (
    <div>
        <h1>{num}</h1>
        <input type="text" placeholder='Search Posts' value={search} 
        onChange={(e)=>Setsearch(e.target.value)}></input>
    </div>
  )
}

export default Search