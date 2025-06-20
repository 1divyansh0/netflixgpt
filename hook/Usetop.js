import React, { useEffect, useState } from 'react'
import options from '../Constant/Cons'

const Usetop = () => {
    const [topmovies, settopmovies] = useState(null)
  const topapi = async ()=>{
    const topm = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
    const topmjson = await topm.json();
    settopmovies(topmjson);
  }
  useEffect(() => {
    topapi();
  }, [])
  return topmovies
}

export default Usetop