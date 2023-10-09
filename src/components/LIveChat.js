import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LIveChat = () =>{
    const [liveMessage,setLiveMessage] = useState("")
    
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

        },2500)

        return () =>{ clearInterval(i)}
    },[])
    return(
        <div>
        <div className="flex flex-col-reverse overflow-y-scroll h-[500px] ">
            {chatMessages.map((c,i) => (<ChatMessage name={c.name} message={c.message} />))}          
            </div>

            {/* <form className="mt-4 border-t-2 shadow-2xl flex  h-auto justify-between"
            onSubmit={(e)=>{
                e.preventDefault();
                console.log("submit",liveMessage)
                dispatch(addMessage({
                    name:"ragini",
                    message:liveMessage,
                }))
            }}
            >
                <input type="text" className="h-full py-2.5 border-0"value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value);
                console.log(setLiveMessage)
                }}></input>
                <button className="bg-green-300 p-2.5">post</button>
            </form> */}


            </div>
    )
}
export default LIveChat