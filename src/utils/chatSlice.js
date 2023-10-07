import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const chatSlice=createSlice(
    {
        name:"chat",
        initialState:{
            messages:[],
    },
    reducers:{
        addMessage:( state,action)=>{state.messages.push(action.payload);
        },
    },
})
export const {addMessage} =chatSlice.actions

export default chatSlice.reducer;