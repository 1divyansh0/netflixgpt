import { configureStore } from "@reduxjs/toolkit";
import userReudcer from './slice'
import movieslicereducer from './Movielist'
import gptreducer from './Gptslice'
const appstore = configureStore({
    reducer:{
     slice: userReudcer,
     movieslice:movieslicereducer,
     gpt: gptreducer,
    },
}
)
export default appstore;