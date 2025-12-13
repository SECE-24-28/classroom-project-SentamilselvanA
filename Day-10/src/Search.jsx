import React, { useContext } from 'react'
import DataContext from './DataContext';

const Search = () => {
    const {search,Setsearch}=useContext(DataContext);
  return (
    <div className="search-box">

        {/* <h1>{num}</h1> */}
        <input type="text" placeholder='Search Posts' value={search} 
        onChange={(e)=>Setsearch(e.target.value)}></input>
    </div>
  )
}

export default Search