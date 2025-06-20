import React, { useEffect } from 'react'
import Header from './header'
import { useState } from 'react';
import { valid } from '../validation/valid';
import { auth } from '../validation/firebse';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/slice';


const login = () => {
  
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [validate, setvalidate] = useState("");
    const [fullname, setfullname] = useState("");
    const dispatch = useDispatch(state=>state.slice)
    
   
    const [issignup, setissignup] = useState(false);
    const handler = ()=>{
    setissignup(!issignup);
    }
  const submit = ()=>{
    const message = valid(email,password);
      setvalidate(message)
    
    
    if(message)return ;

   if(issignup){
   createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
    displayName:fullname
}
).then(() => {
  // Profile updated!
  const user = userCredential.user;
  console.log()
  dispatch(adduser({ uid: user.uid,
        email: user.email,
        name: fullname,}))
  toast.success("SignUp Successfull!")
  // navigate("/browse");
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});

    //console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setvalidate(errorCode+" "+ errorMessage);
    // ..
  });
}
else{
 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // navigate("/browse");
    toast.success("Logged In!")
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setvalidate(errorCode+""+errorMessage);
     toast.warning("Logged In Failed!")
  });


}
  }
  return (
    <div >
        <Header/>
        <div className='absolute'>
         <img  className="w-full h-screen md:h-auto object-cover " src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_medium.jpg" alt="" />
        </div>
        <form  onSubmit={(e)=>e.preventDefault()} action="" className=' flex flex-col w-[90%] md:w-1/4 h-130 bg-black absolute mx-auto mt-50 left-0 right-0 rounded-md opacity-80'>
         <h1 className='text-white font-bold text-3xl p-15'>{!issignup ? <span> Sign In</span>  : <span> Sign Up</span> }</h1>
         <div className='w-full flex flex-col justify-center items-center gap-3'>
            {issignup? < input value={fullname} onChange={(e)=>{
               setfullname(e.target.value);
            }} type="Full Name" placeholder='Enter Full Name' className=' p-3 w-[70%] rounded-md bg-gray-600 text-white placeholder-white' />: null}
           <input value={email} onChange={(e)=>{
            setemail(e.target.value)

           }} type="text" placeholder='Enter Email' className=' p-3 w-[70%] rounded-md bg-gray-600 text-white placeholder-white' />
           
           <input value={password} onChange={(e)=>{
            setpassword(e.target.value)
           }} type="text" placeholder='Enter Password' className=' p-3 w-[70%]  rounded-md bg-gray-600 text-white placeholder-white' />
           <p className='text-red-600 font-bold text-md text-center'>{validate}</p>
           
         <button type='submit' onClick={()=>{
            submit();
         }} className='w-[70%] bg-red-600 h-12  rounded-md text-white font-semibold'>

           {!issignup ? <span> Sign In</span>  : <span> Sign Up</span> }

         </button >
         </div>
         <h3 className=' px-14 py-5 text-white'>New to NetflixGpt ? <span onClick={()=>{
            handler()
         }} className='cursor-pointer'>{!issignup ? <span> SignUP Now</span> : <span> SignIn Now</span>}</span></h3>
    
        </form>
       
    </div>
  )
}

export default login