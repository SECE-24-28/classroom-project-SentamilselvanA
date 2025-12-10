import React, { useContext } from 'react'
import Datacontext from './Datacontext';

const Two = () => {
    const {age,City}=useContext(Datacontext);
  return (
    <>
    <h2>Age:{age}</h2>
    <h2>City:{City()}</h2>
    </>
  )
}

export default Two