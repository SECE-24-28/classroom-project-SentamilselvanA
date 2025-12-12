import React, { useContext } from 'react'
import DataContext from '../DataContext';

const AddPost = () => {
  const {title,setTitle,body,setBody,handleSubmit}=useContext(DataContext);
  return (
    <div>
        <br></br>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Add Posts' 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}></input>
        <br></br>
        <br></br>
        <textarea placeholder='Add Post Details'
        value={body} 
        onChange={(e)=>setBody(e.target.value)}
        ></textarea>
        <br></br>
        <button type='submit'>Add Post</button>
        </form>
    </div>
  )
}

export default AddPost