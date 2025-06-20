import React from 'react'
import { img_url } from '../Constant/Cons'

const moviecard = ({path}) => {
    
  return (
    <div className='w-35 shrink-0 shadow-2xl' >
        <img  src={img_url+path} alt="" />
    </div>
  )
}

export default moviecard