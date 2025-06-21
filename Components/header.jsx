import React, { useEffect } from 'react'
import { auth } from '../validation/firebse';
import { useNavigate } from 'react-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, removeuser } from '../utils/slice';
import { toggle } from '../utils/Gptslice';
import { toast } from 'react-toastify';

const header = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const user = useSelector(state=>state.slice);
  const showgpt = useSelector(state=>state.gpt.gptsearch);
  // console.log(showgpt);
  const handlergpt = ()=>{
    dispatch(toggle());
  }

  // console.log(user);
     useEffect(() => {
   onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName} = user;
    dispatch(adduser({uid:uid,email:email,name:displayName}))

   
    // ...
    navigate("/browse")
    
  } else {
    // User is signed out
    // ...
    navigate("/");
    dispatch(removeuser())
  
  }
})
  }, [])

  const handler = ()=>{
  signOut(auth).then(() => {
  // Sign-out successful.
  // navigate("/");
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className='bg-black opacity-90 md:bg-transparent absolute w-full h-25 p-1 bg-gradient-to-b from-black  z-5 flex flex-col md:flex-row md:justify-between'>
        <img className='w-50 mx-auto md:mx-0 ' src="
https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
    
    {user?(<div className='flex gap-20 md:gap-5  justify-center items-center h-30'>
     <span className='text-white font-semibold font-light '>Hy {user.name}!</span>
     <div className='flex gap-2'>
     <div className=' bg-red-600 w-20 h-8 rounded-md flex justify-center  items-center' onClick={()=>{
      handler();
     }}>
     <span className='font-bold text-white cursor-pointer text-sm '>Sign Out</span>
    </div>
    {!showgpt? <div className=' bg-violet-600 w-27 p-2 mr-2  h-8 rounded-md flex justify-center  items-center' onClick={()=>{
      handlergpt();
     }}>
      <span className='font-bold text-white cursor-pointer text-sm'>Gpt Search</span>
    </div>:<div className=' bg-violet-600 w-27 p-2 mr-2  h-8 rounded-md flex justify-center  items-center' onClick={()=>{
      handlergpt();
     }}>
      <span className='font-bold text-white cursor-pointer'>Back</span>
      
    </div>}
    </div>
    </div>):null}
    </div>
    
  )
}

export default header