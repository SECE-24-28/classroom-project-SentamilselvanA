import React, {  useContext } from 'react'
import { useParams } from 'react-router-dom';
import DataContext from './DataContext';

const EditPost = () => {
    const {posts,handleDelete}=useContext(DataContext);
     const {id}=useParams();
     const post = posts.find((p)=>p.id==id);
     if(!post){
        return <h2>Post Not Found</h2>
     }
    return (
    <div className='addpost-box'>
        <input type="text" value={post.title}></input>
        <br/>
        <textarea value={post.body}/>
        <br/>
        <button onClick={()=>handleDelete(post.id)}>Delete</button>
    </div>
  )
}

export default EditPost