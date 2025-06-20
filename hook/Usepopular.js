import React, { useEffect, useState } from 'react'
import options from '../Constant/Cons'

const Usepopular = () => {
     
    const [pmovies, setpmovies] = useState(null)
    const apicall = async()=>{
       const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options);
       const jsondata = await data.json();
       setpmovies(jsondata);
    }

    useEffect(() => {
     apicall()
    }, [])
    
    return pmovies;
}

export default Usepopular