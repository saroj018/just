import { createSlice } from "@reduxjs/toolkit";

let initialState={
    count:0
}

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
             state.count+=1
             console.log(state.count);
        },
        decrement:(state)=>{
             state.count-=1
        }
    }
})

export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer