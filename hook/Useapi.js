import { useEffect, useState } from "react";
import options from "../Constant/Cons";
import { useDispatch } from "react-redux";
import { addmovie } from "../utils/Movielist";

const Useapi = ()=>{
   const dispatch = useDispatch();
   const [apidata, setapidata] = useState(null);

   const getinfo = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    // console.log(data);
    const jsond = await data.json();
    // console.log(jsond)
    setapidata(jsond)
    dispatch(addmovie(jsond?.results));
   }

   useEffect(() => {
     getinfo()
   }, [])

   return apidata;
}
export default Useapi; 