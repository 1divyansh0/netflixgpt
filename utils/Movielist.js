import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name: 'movieslice',
    initialState:{
        nowplaying:[]
    },
    reducers:{
       addmovie: (state,action)=>{
          state.nowplaying = action.payload
       }
    }
})
export const {addmovie} = movieslice.actions
export default movieslice.reducers;