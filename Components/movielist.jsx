import React from 'react'
import Moviecard from './moviecard'

const movielist = ({list,t}) => {
    
    
  return (
    <div className='flex flex-col '>
    <h1 className='p-5 font-bold  text-lg text-white'>{t}</h1>
    <div id="list" className='flex overflow-x-scroll gap-3 p-3 scrollbar-none '>
    {list?.map((ele)=>{
      if(!ele.poster_path)return null;
      return  <Moviecard path={ele?.poster_path}/>

    })}
    </div>

    </div>
  )
}

export default movielist