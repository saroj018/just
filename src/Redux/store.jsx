import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slicer/counteSlicer'


export const store=configureStore({
    reducer:{
        count:counterReducer,
    }
})
