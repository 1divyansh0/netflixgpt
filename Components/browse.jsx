import React, { useEffect, useState } from 'react'
import Header from './header'
import { useSelector } from 'react-redux'
import options from '../Constant/Cons'
import Maincomp from './maincomp'
import { data } from 'react-router'
import Useapi from '../hook/Useapi'
import Secondary from './secondary'
import Gptsearch from './gptsearch'

const browse = () => {
  
   const apidata = Useapi();
   console.log(apidata)
   const showgpt = useSelector(state=>state.gpt.gptsearch);
    console.log(showgpt);
   
  return (
    
    <div>
      <Header/>
    {showgpt? <Gptsearch/>:
    <>
    <Maincomp movies={apidata}/>
    <Secondary/>
    </>
    }   

    </div>
  )
}

export default browse