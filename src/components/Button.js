import React from "react";

const Button = ({name}) =>{
    return(
        <div className="m-2">
         <button className="bg-slate-200 px-2 md:py-1 rounded-lg">{name}</button>
         
        </div>
    )
}
export default Button;