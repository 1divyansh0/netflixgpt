import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name:'gpt',
    initialState:{
     gptsearch : false,
     gptmoviesname: null,
     gptmovielist:null
    },
    reducers:{
     toggle: (state)=>{
      state.gptsearch=!state.gptsearch;
     },
     addgptmovies:(state,action)=>{
        const {moviename,movielist} = action.payload
        state.gptmoviesname = moviename;
        state.gptmovielist = movielist;
     }
    }
})

export default gptslice.reducer;
export const {toggle,addgptmovies} = gptslice.actions