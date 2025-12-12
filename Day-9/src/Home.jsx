import React, {  useContext } from 'react'
import DataContext from './DataContext';

const Home = () => {
   const {posts,handleDelete}=useContext(DataContext);
  return (
    <div>
        {
      posts.map((p)=>
        <div key={p.id}>
          {/* <h2>{p.id}</h2> */}
          <h3>{p.title}</h3>
          <p>{p.datetime}</p>
          <p>{p.body}</p>
          <button onClick={()=>handleDelete(p.id)}>Delete</button>
          <hr></hr>
        </div>
      )
    }
    </div>
  )
}

export default Home