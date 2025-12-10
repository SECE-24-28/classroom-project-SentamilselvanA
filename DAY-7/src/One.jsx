import React, { useContext } from 'react'
import Datacontext from './Datacontext';

const One = () => {
     const {name}=useContext(Datacontext);
     
    return (
    <div>
        <h1>{name}</h1>

    </div>
  )
}

export default One