import React from "react";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
const Dispatch = useDispatch() ;

const toggleMenuHandler = () =>{
    Dispatch(toggleMenu());
};


    return(
        <div className="grid grid-flow-col shadow-lg py-8 px-4">
            <div className="w-9 col-span-1">
                <img onClick={() =>{toggleMenuHandler()}} 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSxDi-7pXCkkCO3daDIiKS_0602UEJQ5BfCruSiR7LQ&s"alt="menu" className="w-full cursor-pointer"></img>
            </div>
            <div className="w-28 col-span-1 relative -left-14 p-0.5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNvE0BVKYsH-EceH_u2MBDgbiowadaNTTEA&usqp=CAU"alt="youtube-logo"className="w-full"></img>
            </div>
            <div className="flex border-2 col-span-8 rounded-xl border-gray-400 justify-between">
            <input type="text" className="w-full rounded-xl pl-2 border-r-2 mr-4 "placeholder="search"></input>
            <button type="search" className="w-9 px-2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVXvNI4E3PQ18LUBBYIpjyQUQUwhBTw3VQiBMYec8Omw&s"alt="search-icon"></img></button>
            </div>
            <div className="w-9 col-span-2 relative left-20">
                <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="user-logo"></img>
            </div>
        </div>
    )
}
export default Head ;