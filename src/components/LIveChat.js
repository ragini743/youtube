import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
const LIveChat = () =>{
    const dispatch= useDispatch();

    useEffect(() =>{
        const i = setInterval(()=>{
            console.log("api [polling");
            // api polling
            dispatch(
                addMessage({
                    name:"ragini",
                    message:"hi",
                })
            )

        },2000)

        return () =>{ clearInterval(i)}
    },[])
    return(
        <div className=""><ChatMessage name={"ragini"} message={"hi"}/></div>
    )
}
export default LIveChat