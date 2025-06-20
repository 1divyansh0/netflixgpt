import React, { useEffect } from 'react'
import Header from '../Components/header'
import Login from '../Components/login'
import Body from '../Components/body'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Browse from '../Components/browse'
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../utils/slice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../validation/firebse'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const App = () => {
  
  const dispatch = useDispatch();
  const approuter = createBrowserRouter([
    { path:"/",
      element: <Login/>
    },
    {
      path:"/browse",
      element: <Browse/>
    }
  ])

 


  
  return (
    <div className=' w-full h-screen '>
     
       <RouterProvider router={approuter}/>
       <ToastContainer position="top-center" theme="dark" autoClose={4000}/>
      {/* <Body/> */}
      
    </div>
  )
}

export default App