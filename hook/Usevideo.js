import React, { useEffect, useState } from 'react'
import options from '../Constant/Cons'

const Usevideo = (id) => {
   
  const [teaser, setteaser] = useState(null)
  const videodata = async ()=>{
    const vdata = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,options);
    const vdata2 =  await vdata.json();
    setteaser(vdata2);

  }
   useEffect(() => {
    if(!id)return;
    videodata();
   }, [id])

   return teaser;
   
}

export default Usevideo