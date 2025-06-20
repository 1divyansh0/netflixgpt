import React from 'react'
import Videot from './videot'
import Video from './video'

const maincomp = ({movies}) => {
    const moviest = movies?.results?.[0];
    console.log(moviest);
  return (
    <div className='  pt-[30%] md:pt-0 bg-black md:bg-transparent'>
        <Videot movies={moviest}/>
        <Video id={moviest?.id}/>
      
    </div>
  )
}

export default maincomp