import React from 'react'
import Movielist from './movielist'
import Usepopular from '../hook/Usepopular'
import Useapi from '../hook/Useapi';
import Usetop from '../hook/Usetop';

const secondary = () => {
    const popular_movie = Usepopular();
    const now_playing = Useapi();
    const top_movies = Usetop();
  return (
    <div className='bg-black'>
    <div className='relative  mt-0 md:-mt-51'>
     <Movielist list = {now_playing?.results} t={"Now Playing"}/>
     <Movielist list = {popular_movie?.results} t={"Popular Movies"}/>
     <Movielist list = {top_movies?.results} t={"Upcoming"}/>
    
    </div>
    </div>
  )
}

export default secondary