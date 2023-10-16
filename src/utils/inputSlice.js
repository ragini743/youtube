import { combineReducers, createSlice } from "@reduxjs/toolkit";
const inputSlice=createSlice(
{ name:"inputSearch",
        initialState:"",
        reducers:{
            InputResults:(state,action) =>{
                state = (state,action)=>{
                console.log("hello")
                };
                // state = {...state,...action.payload}
                //     }
        },
        },
    });
    export const {cacheResults} = inputSlice.actions
    
    export default inputSlice.reducer
