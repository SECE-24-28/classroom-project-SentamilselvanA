import React, {  useContext } from 'react'
import DataContext from './DataContext';
import Search from './Search';
import { Link } from 'react-router-dom';

const Home = () => {
   const {searchResult,handleDelete}=useContext(DataContext);
  return (
    <>
    <Search></Search>
    <div className="post-card">
        {
      searchResult.map((p)=>
        <div key={p.id}>
          {/* <h2>{p.id}</h2> */}
          <Link to={`/editpost/${p.id}`}>
          <h3>{p.title}</h3>
          <p>{p.datetime}</p>
          <p>{p.body}</p>
          </Link>
          <button onClick={()=>handleDelete(p.id)}>Delete</button>
          <hr></hr>
        </div>
      )
    }
    </div>
    </>
  )
}

export default Home