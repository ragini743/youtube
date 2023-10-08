import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LIveChat = () =>{
    const dispatch= useDispatch();
    const chatMessages = useSelector(store=>store.chat.messages)
    console.log("chatMessages",chatMessages)

    useEffect(() =>{
        const i = setInterval(()=>{
            console.log("api [polling");
            // api polling
            dispatch(
                addMessage({
                    name:generateRandomName(),
                    message:makeRandomMessage(20),
                })
            )

        },2000)

        return () =>{ clearInterval(i)}
    },[])
    return(
        <div className="flex flex-col-reverse overflow-y-scroll h-[500px] ">
            {chatMessages.map((c,i) => (<ChatMessage name={c.name} message={c.message} />))}</div>
    )
}
export default LIveChat