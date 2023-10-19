import React, { useEffect } from "react";
import { useState } from "react";
import { searchResultAPI } from "../utils/constants";
import UserVideo from "./UserVideo";
import { useSearchParams } from "react-router-dom";

const InputContainer = () => {
  const [searchParams] = useSearchParams();
  console.log("searchParams",searchParams)
    const URL= searchParams.get("q") ;
    const [result,setResult]  = useState ([]);
    console.log("URL",URL);
 
    const getResult = async () =>{
        const resultData=await fetch(searchResultAPI+URL);
        const jsonResult = await resultData.json()
        console.log("jsonResult",jsonResult.items)
        setResult(jsonResult.items)
        console.log("result",result)
      }
      useEffect(() =>{
        getResult();}
        ,[result]
      )
     

return(
    <div>sdfgthygbfvcdxz
{/* <UserVideo /> */}
    </div>
)
}
export default InputContainer ; 





