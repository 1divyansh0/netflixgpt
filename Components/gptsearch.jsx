import React, { useRef, useState } from 'react'
import { GoogleGenAI } from "@google/genai";
import options from '../Constant/Cons'
import Movielist from './movielist';
import { useDispatch, useSelector } from 'react-redux';
import { addmovie } from '../utils/Movielist';
import { addgptmovies } from '../utils/Gptslice';
import { toast } from 'react-toastify';

const gptsearch = () => {
  
  const searchdata = useRef(null);
  // const [searchedmovie, setsearchedmovie] = useState("");
   const dispatch = useDispatch();
   const {gptmoviesname,gptmovielist} = useSelector(state=>state.gpt);
   
  

  const ai = new GoogleGenAI({ apiKey: "AIzaSyD_u7a0WVZG9fJJpwspzB6jblMaqcc23yo" });
 
async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  // console.log(response.text)
  return response.text;
}
//  console.log(searchedmovie);

//  console.log(array);

  const fetchmovies = async(encode)=>{
    const moviesdata = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encode}&include_adult=false&language=en-US&page=1`, options)
    const jsonmoviedata = await moviesdata.json();
     return jsonmoviedata;
  }
  const handler= async (e)=>{
    toast.success("Searching Movies!")
    e.preventDefault();
    const prompt = searchdata.current.value +"tell me only top 6 bollywood indian movies names dont write anything extra just give me movies list in string formate separated by comma"
    const searchedmovie = await main(prompt);
    const array = searchedmovie.split(",");

    const promisearray = array.map((movie)=>{
          return fetchmovies(movie);
    })
    const md = await Promise.all(promisearray);
    dispatch(addgptmovies({moviename:array , movielist: md}))
    // console.log(md);

  }

  console.log(gptmovielist);


  return (
    <div className='w-full  relative flex justify-center items-center '>
      <img className='h-screen w-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_medium.jpg" alt="" />
      <form  action="" onSubmit={(e)=>{
          handler(e);
        }}className='absolute z-10 bg-black w-[90%] md:w-[40%] h-10 top-10 rounded-md flex border-2 border-red-500 mt-27 md:mt-0 '>
        <input  ref={searchdata} type="text" placeholder='What do you want to see?'  className=' w-full md:w-[70%] text-center py-auto h-[100%] text-white '/>
        <button  type='submit' className='w-[30%] bg-red-600 rounded-r-md  text-white font-semibold' 
        >Search</button>
      </form>
      {/* this div i want to make it visible */}
      
      <div  className='bg-black opacity-90 p-3 rounded-md absolute pt-35   h-full w-full'>
         <div id="imp" className='w-full overflow-y-auto h-full  '>
          {gptmoviesname?.map((m,index)=>{

            return <Movielist  key={m} list ={gptmovielist?.[index]?.results} t={m}/>
          })}
         </div>
      </div>

    </div>


  )
}

export default gptsearch