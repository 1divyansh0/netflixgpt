import React from 'react'
import Usevideo from '../hook/Usevideo'

const video = ({id}) => {
    
    const d = Usevideo(id);
    const trailer = d?.results?.filter((e)=>(e.type == "Trailer"));
    
    const first_trailer = trailer?.[trailer.length-1];
    console.log(first_trailer)
    
  return (
    <div className='w-full '>
        <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${first_trailer?.key}?autoplay=1&mute=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default video