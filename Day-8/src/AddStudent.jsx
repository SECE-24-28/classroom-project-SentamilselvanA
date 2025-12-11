import React, { useRef } from 'react'

const AddStudent = ({newstu,setNewStu,handleSubmit}) => {
    const inputRef=useRef()
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='New Student'
                               value={newstu}
                                ref={(inputRef)}
                               onChange={(e)=>setNewStu(e.target.value)}
            />
            <button type='submit' onClick={()=>inputRef.current.focus()}>Submit</button>
        </form>
    </div>
  )
}

export default AddStudent