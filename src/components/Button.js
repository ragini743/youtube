import React from "react";

const Button = ({name}) =>{
    return(
        <div className="p-2">
         <button className="bg-slate-200 px-3 py-1 rounded-lg">{name}</button>
         
        </div>
    )
}
export default Button;