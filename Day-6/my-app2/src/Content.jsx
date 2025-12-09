import React from 'react'

const Content = (frnds) => {
  return (
    <div>
        <ul>
            {
                frnds.map((val,index)=>{   
                    <li key={index}>{val}</li>
                }
                )
            }
        </ul>
    </div>
  )
}

export default Content