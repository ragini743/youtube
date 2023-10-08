import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { OFFSET_liveChat } from "./constants";

const chatSlice=createSlice(
    {
        name:"chat",
        initialState:{
            messages:[],
    },
    reducers:{
        addMessage:( state,action)=>{
            state.messages.splice(OFFSET_liveChat,1)
            state.messages.unshift(action.payload);
        },
    },
})
export const {addMessage} =chatSlice.actions

export default chatSlice.reducer;